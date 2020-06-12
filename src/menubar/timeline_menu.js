const {
  QMenu,
  QAction
} = require('@nodegui/nodegui');

class TimelineMenu{
  constructor(){
    const menu = new QMenu();
    menu.setTitle('タイムライン');

    // TODO: ユニバーサル引用Renote
    const renote_action = new QAction();
    const quote_action = new QAction();
    const image_view_action = new QAction();

    renote_action.setText('Renote');
    quote_action.setText('引用Renote');
    image_view_action.setText('画像を表示');

    menu.addAction(renote_action);
    menu.addAction(quote_action);
    menu.addAction(image_view_action);

    this.menu = menu;
    this.renote_action = renote_action;
    this.quote_action = quote_action;
    this.image_view_action = image_view_action;
  }

  get_widget(){
    return this.menu;
  }

  set_post_action(action){
    this.renote_action.addEventListener('triggered', () => {
        action.renote();
    });
    this.image_view_action.addEventListener('triggered', () => {
        action.image_view();
    });
    this.quote_action.addEventListener('triggered', () => {
        action.quote();
    })
  }
}

module.exports = TimelineMenu;
