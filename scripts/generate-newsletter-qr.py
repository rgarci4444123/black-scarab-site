"""Regenerate the static newsletter QR asset. Requires Python's qrcode package."""

import re
from pathlib import Path

import qrcode


root = Path(__file__).resolve().parents[1]
source = (root / "lib/newsletter.ts").read_text()
url = re.search(r'newsletterSignupUrl = "([^"]+)"', source).group(1)
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_Q, border=4)
qr.add_data(url)
qr.make(fit=True)
matrix = qr.get_matrix()
size = len(matrix)
path = " ".join(
    f"M{x},{y}h1v1h-1z"
    for y, row in enumerate(matrix)
    for x, filled in enumerate(row)
    if filled
)
svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" '
    'shape-rendering="crispEdges">'
    f'<title>{url}</title>'
    f'<path fill="#fff" d="M0 0h{size}v{size}H0z"/>'
    f'<path fill="#000" d="{path}"/></svg>\n'
)
(root / "public/newsletter-subscribe-qr.svg").write_text(svg)
print(f"Generated {size} × {size} QR with four-module quiet zone: {url}")
