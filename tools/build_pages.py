#!/usr/bin/env python3
"""Build the GitHub Pages artifact as one self-contained static page.

The source remains organized in small HTML, CSS and JavaScript files, while the
published artifact contains the approved background and the replaceable product
embedded directly in one index.html. This avoids runtime asset failures and
cache conflicts regardless of how GitHub Pages is configured.
"""

from __future__ import annotations

import base64
import hashlib
import html
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "_site"

HTML_PARTS = [ROOT / "src" / "index" / f"{part}.html" for part in ("00", "01", "02", "03", "04")]
CSS_PARTS = [ROOT / "src" / "styles" / f"{part:02d}.css" for part in range(16)]
CSS_PARTS.append(ROOT / "src" / "styles" / "final.css")
SCRIPT_PARTS = [ROOT / "src" / "scripts" / name for name in ("00.js", "01.js", "02.js", "04.js", "08.js")]


def read_text(path: Path) -> str:
    if not path.is_file():
        raise FileNotFoundError(f"Required file not found: {path.relative_to(ROOT)}")
    return path.read_text(encoding="utf-8")


def read_base64_parts(directory: Path) -> str:
    parts = sorted(directory.glob("part-*.b64"))
    if not parts:
        raise FileNotFoundError(f"No base64 parts found in {directory.relative_to(ROOT)}")
    encoded = "".join(read_text(path) for path in parts)
    return "".join(encoded.split())


def sha256_source(value: str) -> str:
    digest = hashlib.sha256(value.encode("utf-8")).digest()
    return base64.b64encode(digest).decode("ascii")


def build() -> None:
    html_source = "".join(read_text(path) for path in HTML_PARTS)
    css_source = "\n".join(read_text(path) for path in CSS_PARTS)
    script_source = "\n".join(read_text(path) for path in SCRIPT_PARTS)

    background_base64 = read_base64_parts(ROOT / "src" / "assets-source" / "hero-background-v2")
    product_base64 = read_base64_parts(ROOT / "src" / "assets-source" / "hero-product")

    css_source = css_source.replace(
        "__HERO_BACKGROUND_DATA__",
        f"data:image/webp;base64,{background_base64}",
    )
    script_source = script_source.replace(
        "__HERO_PRODUCT_DATA__",
        f"data:image/webp;base64,{product_base64}",
    )

    if "__HERO_BACKGROUND_DATA__" in css_source:
        raise RuntimeError("Hero background placeholder was not replaced")
    if "__HERO_PRODUCT_DATA__" in script_source:
        raise RuntimeError("Hero product placeholder was not replaced")

    safe_css = css_source.replace("</style", "<\\/style")
    safe_script = script_source.replace("</script", "<\\/script")

    style_hash = sha256_source(safe_css)
    script_hash = sha256_source(safe_script)
    policy = "; ".join(
        (
            "default-src 'self'",
            "img-src 'self' data: https://lamusica.com.br",
            f"style-src 'self' 'sha256-{style_hash}'",
            f"script-src 'self' 'sha256-{script_hash}'",
            "font-src 'self'",
            "connect-src 'self'",
            "object-src 'none'",
            "base-uri 'none'",
            "form-action 'self'",
            "upgrade-insecure-requests",
        )
    )

    csp_tag = (
        '<meta content="'
        + html.escape(policy, quote=True)
        + '" http-equiv="Content-Security-Policy"/>'
    )

    page = html_source
    page = page.replace(
        '<meta content="default-src \'self\'; img-src \'self\' data: https://lamusica.com.br; style-src \'self\'; script-src \'self\'; font-src \'self\'; connect-src \'none\'; object-src \'none\'; base-uri \'none\'; form-action \'self\'; upgrade-insecure-requests" http-equiv="Content-Security-Policy"/>',
        csp_tag,
    )
    page = page.replace('<link href="styles.css" rel="stylesheet"/>', f"<style>{safe_css}</style>")
    page = page.replace('<script defer="" src="script.js"></script>', f"<script>{safe_script}</script>")

    if 'href="styles.css"' in page or 'src="script.js"' in page:
        raise RuntimeError("Legacy runtime assets are still referenced")
    if "loader.js" in page or "loader.css" in page:
        raise RuntimeError("Runtime loader must not be present in the built page")
    if "__HERO_BACKGROUND_DATA__" in page or "__HERO_PRODUCT_DATA__" in page:
        raise RuntimeError("Hero assets are not fully embedded")
    if page.count("<html") != 1 or page.count("</html>") != 1:
        raise RuntimeError("Built page does not contain exactly one HTML document")
    if 'id="inicio"' not in page or 'id="contato"' not in page:
        raise RuntimeError("Built page is missing required sections")

    shutil.rmtree(OUT, ignore_errors=True)
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "index.html").write_text(page, encoding="utf-8")
    (OUT / ".nojekyll").touch()

    map_source = ROOT / "assets" / "maps" / "brazil-states.svg"
    map_target = OUT / "assets" / "maps" / "brazil-states.svg"
    map_target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(map_source, map_target)

    print(f"Built {OUT / 'index.html'} ({(OUT / 'index.html').stat().st_size} bytes)")
    print("Published structure: one HTML page, one map asset, no runtime loader")


if __name__ == "__main__":
    build()
