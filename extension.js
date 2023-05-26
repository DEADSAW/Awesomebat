const { St, Clutter } = imports.gi;
const Main = imports.ui.main;

let textLabel;

function enable() {
  textLabel = new St.Label({
    text: '100%',
    y_align: Clutter.ActorAlign.CENTER,
    style_class: 'battery-label'
  });
  Main.panel._rightBox.insert_child_at_index(textLabel, 0);
}

function disable() {
  Main.panel._rightBox.remove_child(textLabel);
  textLabel = null;
}

