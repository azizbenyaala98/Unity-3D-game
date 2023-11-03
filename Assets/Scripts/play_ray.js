#pragma strict

private var doorIsOpen : boolean = false;
	private var doorTimer : float = 0.0;
	var currentDoor : GameObject;
	
	var doorOpenTime : float = 4.0;
	

	function Door(openCheck : boolean,
	animName : String,thisDoor : GameObject){
	doorIsOpen = openCheck;

	thisDoor.transform.parent.animation.Play(animName);
	}

function Start () {

}

function Update () {

	var hit : RaycastHit;
	if(Physics.Raycast (transform.position, transform.forward, hit, 5)) {
	if(hit.collider.gameObject.tag== "porte_tag" && doorIsOpen ==
	false){
	currentDoor = hit.collider.gameObject;

	Door(true, "Door_open", currentDoor);}}

	if(doorIsOpen){
	doorTimer += Time.deltaTime;

	if(doorTimer > 8){
	Door(false, "Door_closed", currentDoor);

	doorTimer = 0.0;

	}
 }
}