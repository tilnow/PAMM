let icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>'

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Looking Glass',
        svgIcon: icon,
        positionPriority: 1,
        onClick: () => {
          miro.board.ui.openLeftSidebar('PAMM/sidebar.html')
        }
      }
      
                          getWidgetMenuItems: (widgets) => {

                        const supportedWidgetsInSelection = widgets
                            .filter((widget) => Config.supported_widgets[widget.type.toLowerCase()] !== undefined);

                        // All selected widgets have to be supported in order to show the menu
                        if (supportedWidgetsInSelection.length == widgets.length) {
                            return Promise.resolve([{
                                tooltip: 'Cardtest',
                                svgIcon: icon,
                                onClick: async (widgets) => {
                                    miro.board.ui.openLeftSidebar('PAMM/sidebar.html');
                                }
                            }])
                        }

                        // Not all selected widgets are supported, we won't show the menu
                        return Promise.resolve([{}]);
                    }
      
    }
  })
})
