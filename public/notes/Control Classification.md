---
chapter: 3
type: concept
status: reviewing
difficulty: low
last-reviewed: 
mastery: 1
summary: "Difference between open-loop (no feedback) and closed-loop (feedback) CNC motion control systems"
equations: []
---

# Control Classification

#mmet380 #ch3 #concept

## In Plain English

If you drive a car with your eyes closed and assume turning the wheel left for three seconds puts you in the next lane, you are operating an open-loop system. If you hit a bump, you'll veer off course and never know it. If you keep your eyes open and adjust the steering wheel until you see you are centered in the lane, you are operating a closed-loop system. CNC machines work exactly the same way: cheap ones assume the motors did what they were told; expensive ones constantly measure the table's actual position and fix any errors on the fly.

## Degrees of Freedom (Axes)

A machine tool consists of several motors and sliding platforms. Each independent direction of motion is referred to as an **"axis"** or a degree of freedom. 
- A simple system moving a table along a straight line via a leadscrew is a "1-axis" system.
- Complex industrial machines can have 11 or more axes to fabricate highly complex geometries.

## Open-Loop Control

In an open-loop system, the computer sends electrical pulses to a stepper motor. The motor turns, the leadscrew spins, and the table moves.

- **Mechanism:** Controller $\rightarrow$ Motor $\rightarrow$ Leadscrew $\rightarrow$ Table.
- **Feedback:** None. There is no sensor to measure if the table actually arrived at the target position.
- **Pros:** Simple, inexpensive, easy to maintain.
- **Cons:** Less accurate. If the tool hits a hard spot in the metal and the motor skips a step, the machine loses its place and the entire part will be machined out of tolerance.

## Closed-Loop Control

In a closed-loop system, sensors are added to constantly monitor the actual state of the machine.

- **Mechanism:** Controller $\leftrightarrow$ Motor $\leftrightarrow$ Leadscrew $\leftrightarrow$ Table $\leftrightarrow$ **Sensors**.
- **Feedback:** Optical encoders or linear scales measure the actual position and speed of the table. This data is fed back to the controller, which compares it to the target value. If there is an error, the controller sends adjustment signals to the motor until the error is zero.
- **Pros:** Highly precise, repeatable, and immune to lost steps from cutting forces.
- **Cons:** Complex and significantly more expensive.

## Connections

- [[Position and Speed Control]] — how the electrical pulses actually translate into motion
- [[CNC Machines]] — the physical implementation of these control loops across multiple axes

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch3 Home]] · [[MMET 380 Hub]]
