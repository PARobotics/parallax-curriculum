//Motor and sensor definition

#pragma platform(VEX)
#pragma competitionControl(Competition)
#pragma autonomousDuration(20)
#pragma userControlDuration(1200)

#include "Vex_Competition_Includes.c"

void pre_auton(){
  //Contains code that should be executed when a robot is turned on, and before auton starts (i.e. sensor resets)
}

task autonomous(){
  //Contains code that should be executed during autonomous
}

/*
	USER CONTROL
*/

task usercontrol(){
  //Initialize values here
  while(true){ //An infinite loop is necessary so we can constantly read values.
    //Put your driver control code here
		wait1Msec(10); //Prevent the system from jamming with an infinite loop.
	}
}
