# Pneumatics
Pneumatics are another way to make a robot move. Unlike motors which rotate, pneumatic pistons push and/or pull linearly using air. However, if you use pneumatics, you can only use 10 motors. Nonetheless, below is some more information on pneumatics as well as some pros and cons of using them. 

## What are pneumatics? 
Pneumatics are the components that allow a robot to move using air-powered pistons. The important components of a pneumatics system are the **air tanks**, **pistons**, and **solenoids**. These pieces are all connected using a combination of tubing and valves. 
* Each robot can have a maximum of two **air tanks**. These store air, so think of them as the “battery” of a pneumatics system. Since they run out quickly, and slowly leak air, they must be pumped immediately before each match to ensure your pneumatics system functions well. 
* **Pistons** are what actually move, by pushing in and out. There are two types of pistons: single action and double action. Single action pistons only have air pressure going out and are pulled back in using a spring. Double action pistons have air pressure going out both ways. Use double action pistons if you need to push and pull with force in both directions, but otherwise use single action pistons. 
* **Solenoids** are what control the opening and closing of pneumatic pistons through software. Be sure to use a double action solenoid for a double action piston and a single action solenoid for a single action piston (a double action solenoid will have two output tubes, one for each input on the piston, as opposed to one on the single action solenoid). They should be plugged into a digital port and treated as digital sensors.  

## Pros
* Pneumatics are simple. They don’t stall, the pistons are compact and lightweight, and they accomplish linear motion seamlessly.
* They are fast. They push out incredibly quick -- great for something like claws. 

## Cons
* Wiring them is harder. Given that each piston needs to be connected to the tank with a tube for air, you need to be extra certain that the wiring is good. If a tube is punctured or air leaks, the pneumatics are useless. 
* They only extend a few inches. Don’t expect to use pneumatics to power your lift. Use them for things like powering a transmission, a claw, or something that requires short distance linear motion.
* They aren’t very powerful. Once again, they hold in place when in use, but don’t expect them to power your lift.
* They run out of air. Your robot can only have two pneumatic tanks on it, and every time a piston moves, it loses air. Once you are out of air, your pistons will not work and will not be powerful. Do not use pneumatics if the piston must be used hundreds of time per match. 
* Pneumatics are digital: They can only be fully deployed or not deployed. Don’t expect a fine level of control with pneumatics. 
* Maintenance: pneumatics must be pumped every match and tubing must be checked regularly to ensure there are no air leaks. 

