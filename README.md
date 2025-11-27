# Fake Battery Extension

A lightweight GNOME Shell extension that displays a customizable fake battery percentage in the top panel.

## Features

- Displays a fake battery indicator in the GNOME top panel
- Customizable battery percentage display
- Minimal resource usage
- Clean, bold styling with red indicator

## Compatibility

| GNOME Shell Version |
|---------------------|
| 3.38                |
| 3.36                |
| 3.34                |

## Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/DEADSAW/Awesomebat.git
   cd Awesomebat
   ```

2. Create a symbolic link to the GNOME extensions directory:
   ```bash
   ln -s $(pwd) ~/.local/share/gnome-shell/extensions/fake-battery-extension@yourname
   ```
   > **Note:** The extension UUID is `fake-battery-extension@yourname` as defined in `metadata.json`. You can customize this by updating the `uuid` field in `metadata.json` and using the same value in the commands above.

3. Restart GNOME Shell:
   - Press `Alt + F2`, type `r`, and press `Enter`
   - Or log out and log back in

4. Enable the extension using GNOME Extensions app or:
   ```bash
   gnome-extensions enable fake-battery-extension@yourname
   ```

## Configuration

To modify the displayed battery percentage, edit the `extension.js` file:

```javascript
text: '100%'  // Change to your desired value
```

## File Structure

```
├── extension.js    # Main extension logic
├── extension.css   # Styling for the battery label
├── metadata.json   # Extension metadata
└── README.md       # Documentation
```

## License

This project is licensed under the [MIT License](LICENSE).

