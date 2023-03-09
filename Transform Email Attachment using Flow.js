(function execute(inputs, outputs) {

var dataSource = new GlideRecord("sys_data_source");
dataSource.get(inputs.datasource); //get the Data Source record
  
var loader = new GlideImportSetLoader();
var importSetRec = loader.getImportSetGr(dataSource);
var ranload = loader.loadImportSetTable(importSetRec, dataSource);
importSetRec.state = "loaded";
importSetRec.update();
  
var transformWorker = new GlideImportSetTransformerWorker(importSetRec.sys_id, inputs.transformmapsysid); 
transformWorker.setBackground(true);
transformWorker.start(); 
})(inputs, outputs);
