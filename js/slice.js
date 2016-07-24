;(function($){
    var Slice= function(sliceContainer,height,width){
    	var self=this;      //获得容器
    	this.sliceContainer=sliceContainer;
    	this.row=height;  //获得图片容器
    	this.col=width;
     }
     Slice.prototype={
        cut:function(){
            var self=this;
            //生成行
            var rowHtml="";
            for(var i=0,len=self.row;i<len;i++)
            {
                rowHtml+="<div></div>";
            }
            //添加行
            self.sliceContainer.append(rowHtml);
            //生成列
            var colHtml="";
            for(var i=0,len=self.col;i<len;i++)
            {
                colHtml+="<span></span>";
            }
            //添加列
            var rows=self.row;
            for(var i=0,len=rows;i<len;i++)
            {
                self.sliceContainer.find("div:eq("+i+")").append(colHtml);
            }

        }
     }
window["Slice"]=Slice;
})(jQuery)