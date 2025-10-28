#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

# Change to the dist directory
os.chdir('dist')

PORT = 3000
HOST = '0.0.0.0'

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        # For SPA routing, serve index.html for non-file requests
        if not os.path.exists(self.path[1:]) and not '.' in os.path.basename(self.path):
            self.path = '/index.html'
        return super().do_GET()

with socketserver.TCPServer((HOST, PORT), MyHTTPRequestHandler) as httpd:
    print(f"🌿 Natural Nagas Conservation Website")
    print(f"🚀 Server running at http://{HOST}:{PORT}")
    print(f"📁 Serving files from dist directory")
    print(f"✨ Press Ctrl+C to stop")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print(f"\n🛑 Server stopped")
        sys.exit(0)