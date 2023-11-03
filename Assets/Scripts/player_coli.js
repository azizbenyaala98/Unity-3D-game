#pragma strict

private var doorIsOpen : boolean = false;
private var doorTimer : float = 0.0;
private var currentDoor : GameObject;

var doorOpenTime : float = 8.0;



function OnControllerColliderHit(hit : ControllerColliderHit){
if(hit.gameObject.tag == "porte_tag" && doorIsOpen == false){

OpenDoor();
}
}

function OpenDoor(){

doorIsOpen = true;
var myOutpost : GameObject = GameObject.Find("outpost");
myOutpost.animation.Play("Door_open");
}

function Update(){
if(doorIsOpen){

doorTimer += Time.deltaTime;
if(doorTimer > 8){
shutDoor();
doorTimer = 0.0;
}
}
}
function shutDoor(){


doorIsOpen = false;
var myOutpost : GameObject =GameObject.Find("outpost");
myOutpost.animation.Play("Door_closed");

}


function Start () {

}

