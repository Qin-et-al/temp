// var s=document.createElement('script');
// s.setAttribute('src','http://www.movable-type.co.uk/scripts/base64.js');
// document.getElementsByTagName('body')[0].appendChild(s);
// void(s);

var imported = document.createElement("script");
imported.src = "http://www.movable-type.co.uk/scripts/base64.js"; 
document.getElementsByTagName("head")[0].appendChild(imported);


function getApplyStatus(){
var apply_status = Base64.decode(document.getElementById("mainForm:applySt").value);
var number =  apply_status.match(/\d+/)[0];

var name = document.getElementById("mainForm:pit4").innerHTML;

// Ref: http://muchong.com/t-11402255-1-authorid-4010226
var interp={
	4:'一个早期状态值。某日同一位虫友交流时获知。估计是允许提回材料时段的状态。因为后来同一人反映变为7之后材料不可提回。',
	7:'续上段，应是资料上传完整，准备导入专家审阅数据库的阶段。',
	8:'专家材料评审的两个打分项，现可认定为两个分数区间。11较8更高。在青骨和优本等报名人数较少的项目中，8也有一定可能性录取。',
	11:'专家材料评审的两个打分项，现可认定为两个分数区间。11较8更高。在青骨和优本等报名人数较少的项目中，8也有一定可能性录取。',
	12:'进入第二次审议阶段前的标志。申请学费面试的同学如果被选中面试，那么在面试前就应该是这个值。若没有被选中或面试不理想，则22。22值后面再说。不申请学费和联培的同学，在结果公布前几天很多变为12，结合面试较理想的同学一直12未变，可推得12状态是top class。',
	13:'淘汰，不解释。',
	21:'一个早期状态值，表示资料已经导入专家库而无法提回。',
	22:'一个让人十分胸闷的值，一些人从11变来，一些人从12变来。这应该是一个被PK下来的组。还有人11-22-8-12，看起来最初22也不是毫无希望，在经过组内以及和8的pk，终回12。',
	23:'录取不解释。'};

alert(name+'的当前申请状态为：'+apply_status+'\n\n参考含义：'+interp[number]);
return 0;
}

getApplyStatus();
