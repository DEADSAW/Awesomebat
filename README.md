# Fake Battery Extension

The Fake Battery Extension is a GNOME Shell extension that displays a fake battery percentage in the top panel of Ubuntu.

## Installation

 Ensure you have the necessary dependencies:
   - Node.js and npm (Node Package Manager)
   - GNOME Shell development package: `sudo apt install gnome-shell-dev`

 Clone or download this repository to your local machine.

 Open a terminal and navigate to the extension's directory:


cd fake-battery-extension


Create the symbolic link to your extension's folder:

ln -s $(pwd) ~/.local/share/gnome-shell/extensions/


5. Restart the GNOME Shell by pressing Alt+F2, entering `r`, and pressing Enter.

6. Open the GNOME Extensions application (you may need to install it if not already installed).

7. Enable the "Fake Battery Extension" from the list of extensions.

## Usage

Once the extension is enabled, you will see a fake battery percentage displayed in the top panel of Ubuntu.

By default, the extension displays "100%" as the battery percentage. To modify the displayed value, open the `extension.js` file in a text editor and modify the `textLabel` content within the `enable()` function.

Please note that this extension does not affect the actual battery level but only displays a static value.

## Compatibility

This extension is compatible with GNOME Shell versions 3.38, 3.36, and 3.34.

## License

This project is licensed under the [MIT License](LICENSE).

