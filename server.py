#!/usr/bin/env python3
"""
Simple HTTP server to serve the Natural Nagas website
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# Configuration
PORT = 8000
DIST_DIR = "dist"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIST_DIR, **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def do_GET(self):
        # Handle SPA routing - serve index.html for non-existent files
        if not os.path.exists(os.path.join(DIST_DIR, self.path.lstrip('/'))):
            if not self.path.startswith('/assets/'):
                self.path = '/index.html'
        return super().do_GET()

def main():
    """Start the HTTP server"""
    
    # Check if dist directory exists
    if not os.path.exists(DIST_DIR):
        print(f"❌ Error: {DIST_DIR} directory not found!")
        print("Please run 'npm run build' first to create the distribution files.")
        sys.exit(1)
    
    # Check if index.html exists
    if not os.path.exists(os.path.join(DIST_DIR, 'index.html')):
        print(f"❌ Error: index.html not found in {DIST_DIR}/")
        print("Please run 'npm run build' first to create the distribution files.")
        sys.exit(1)
    
    try:
        with socketserver.TCPServer(("0.0.0.0", PORT), CustomHandler) as httpd:
            print(f"🌐 Natural Nagas Website Server")
            print(f"📁 Serving directory: {os.path.abspath(DIST_DIR)}")
            print(f"🔗 Server running at: http://localhost:{PORT}")
            print(f"🌍 Available at: http://0.0.0.0:{PORT}")
            print(f"")
            print(f"Press Ctrl+C to stop the server...")
            print(f"")
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print(f"\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"❌ Error: Port {PORT} is already in use!")
            print(f"Try using a different port or stop the existing server.")
        else:
            print(f"❌ Error starting server: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()