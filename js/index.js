 var vm=new Vue({
	el :"#showMsg",
	data:function(){
		return{
			    but: "发表留言",
				cha: "X",
				restt: "确认发布",
				msgflag: 0,
				valtext: "",
			list:[
			     { imgSrc:"./img/1a.jpg",
			       message:"错过就不再找寻",
			       meDate: "2017-2-4",
			       del:"删除",
			     	
			     },
			     { imgSrc:"./img/1a.jpg",
			       message:"错过就不再找寻",
			       meDate: "2017-2-4",
			       del:"删除",
			     	
			     },
			     { imgSrc:"./img/1a.jpg",
			       message:"错过就不再找寻",
			       meDate: "2017-2-4",
			       del:"删除",
			     	
			     }
			
			]
			
			
		}
		
	},

	methods:{
		btnClick:function(){
			this.msgflag=1
		},
		closeBtnClick:function(){
			this.msgflag=false
		},
		delClick:function(v,k){
			this.list.splice(k,1)
		},
		conClick:function(){
			this.msgflag=false;
			var a={
				   imgSrc:this.imgheuh(),
			       message:this.valtext,
			       meDate: "2017-2-4",
			       del:"删除",
			     				     
			};
			this.list.push(a);
			this.valtext="";
			
		},
		imgheuh:function(){
			var romf = Math.floor(Math.random(1)*4);
			var imgsrc="./img/"+romf+"a.jpg";
			return imgsrc;
		}
		
	}
    
});

