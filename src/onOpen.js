const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('Mail Man')
    .addItem('Show SideBar', 'showSideBar')
    .addSeparator()
    .addItem('About', 'showAbout')
    .addToUi();
};

export default onOpen;
