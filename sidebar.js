miro.onReady(() => {
  // subscribe on user selected widgets
  miro.addListener(miro.enums.event.SELECTION_UPDATED, getWidget)
  getWidget()
})
var crdid="";
// Get html elements for tip and text container
const tipElement = document.getElementById('tip')
const widgetTextElement = document.getElementById('widget-text')

async function getWidget() {
  // Get selected widgets
  let widgets = await miro.board.selection.get()
  if (widgets.length==0){
    console.log("nothing selected, so going home");
    return;
  }
  // Get first widget from selected widgets
  let wid=widgets[0];
  let appkey="3074457350779991865";

  metadata_not_exists=(wid.metadata[appkey] == undefined);
  if (metadata_not_exists)
  {
    crdid=await miro.board.widgets.create({type:"CARD",clientVisible: false, title:wid.plainText, text:""})
    let temp2={id:wid.id,metadata:{}}
    temp2.metadata[appkey]={cardid:crdid};
    await miro.board.widgets.update(temp2)
  }
  else{
    crdid=wid.metadata[appkey].cardid;
  }
  let crd=await miro.board.widgets.get({id:crdid});
  let text=crd.text;
  tipElement.style.opacity = '0'
  widgetTextElement.value = text
  document.getElementById("close-but").addEventListener("click",function(){ miro.board.widgets.update({id:crdid,text:widgetTextElement.value});});

  /*
  let text = widgets[0].text

  // Check that widget has text field - though we can do this for any type of widget
  if (typeof text === 'string') {

    // hide tip and show text in sidebar
    tipElement.style.opacity = '0'
    
    widgetTextElement.value = text
  } else {

    // show tip and clear text in sidebar
    tipElement.style.opacity = '1'
    widgetTextElement.value = ''
  }
  */
}
