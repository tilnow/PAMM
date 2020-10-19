let icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>'

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      getWidgetMenuItems: (widgets) => {
 return Promise.resolve({
 tooltip: 'Hi',
 svgIcon: icon24,
 onClick: (widgets) => { console.log('onClick', widgets) }
 });},
      bottomBar: {
        title: 'Looking Glass',
        svgIcon: icon,
        positionPriority: 1,
        onClick: () => {
          miro.board.ui.openLeftSidebar('PAMM/sidebar.html')
        }
      }
    }
  })
})
