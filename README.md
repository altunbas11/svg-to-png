# SVG & PNG Converter (VS Code Extension)

A VS Code extension that provides a modern, browser-based tool for converting between SVG and PNG image formats. Features a clean, user-friendly interface with dimension preservation and multiple conversion options.

## Features

- **SVG to PNG Conversion**: Convert SVG files to PNG with custom dimensions
- **PNG to SVG Conversion**: Wrap PNG images in SVG format for vector compatibility
- **Preset Sizes**: Quick access to common icon sizes (16x16, 24x24, 32x32, 48x48, 64x64, 96x96, 128x128, 256x256, 512x512)
- **Dimension Memory**: Remembers your last used dimensions between sessions
- **Modern UI**: Responsive design with glassmorphism effects and smooth animations
- **Integrated in VS Code**: Access directly from the command palette

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "SVG & PNG Converter"
4. Click Install

Or download the .vsix file and install manually.

## Usage

1. Open VS Code
2. Press Ctrl+Shift+P to open the command palette
3. Type "Open SVG & PNG Converter" and select it
4. The converter will open in a new tab

### SVG to PNG
- Click "Select SVG File" and choose your SVG file
- Set desired width and height (or use preset buttons)
- Click "Convert to PNG"
- Download the converted PNG file

### PNG to SVG
- Click "Select PNG File" and choose your PNG file
- Click "Convert to SVG"
- Download the SVG wrapper file

## Requirements

- VS Code 1.74.0 or higher

## Extension Settings

This extension doesn't add any VS Code settings.

## Known Issues

- File selection is limited to the webview's capabilities

## Release Notes

### 1.0.0
- Initial release with SVG to PNG and PNG to SVG conversion
- Modern UI with responsive design
- Dimension preservation
- Multiple preset sizes

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License