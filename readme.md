# Washingmachine Object

Assignment:

- [Brief](PF-CA-brief.pdf)

This object has the following properties:

- Brand (String), the manufacturer of the machine
- Height (Number), the machine height
- Width (Number), the machine Width
- Depth (Number), the machine depth
- Weight (Number), the machine Weight
- Programs (Array of Object, each object has `Name` and `Temperature` properties), the programs available for the machine
- IsRunning (Boolean), the machine is running (or not) a washing program
- ToggleOnOff (Function), function to toggle the running state (on/off)

The washing machine initial running state is off (false).
Call/execute his function `ToggleOnOff` to toggle the running state (on/off)

```javascript
console.log(washingMachine.isRunning); // output: false
washingMachine.toggleOnOff;
console.log(washingMachine.isRunning); // output: true
```

## Extra

I built also a simple html interface to interact with the object:

- the button `refresh` will show the washing machine current state
- the button `on/off` will toggle the washing machine `running` state

### References

- Unsplash washing machine image
