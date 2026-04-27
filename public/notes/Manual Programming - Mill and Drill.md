---
chapter: 4
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Practical implementation of milling and drilling operations using G00, G01, G02, and G03 commands"
equations: []
---

# Manual Programming - Mill and Drill

#mmet380 #ch4 #concept

## In Plain English

Manual programming is the process of writing every line of G-code yourself, without the help of a computer (CAM). For milling and drilling, this means you are the one "steering" the tool. You use simple commands to tell the tool to move in a straight line (G01) or a curve (G02/G03). The hardest part is the curves—you have to tell the machine exactly where the center of the circle is using "I" and "J" offsets, or just give it the radius "R".

## Core Motion Commands

| Code | Function | Description |
|------|----------|-------------|
| **G00** | Rapid Traverse | Moves the tool at max speed to a position (no cutting). |
| **G01** | Linear Interpolation | Moves the tool in a straight line at a set feed rate (F). |
| **G02** | Circular CW | Moves the tool in a Clockwise arc. |
| **G03** | Circular CCW | Moves the tool in a Counter-Clockwise arc. |

## Programming Arcs (G02/G03)

There are two common ways to define an arc in G-code:

### 1. R-Method (Radius)
Simple but limited (cannot do full 360° circles).
`G02 X[end] Y[end] R[radius]`

### 2. I/J Method (Center Offsets)
The most robust way. **I** is the X-offset and **J** is the Y-offset from the **start point** to the **center point**.
`G02 X[end] Y[end] I[offset] J[offset]`

> [!important] The "Start-to-Center" Rule
> Always calculate I and J by starting at the tool's current position and measuring the distance to the center of the arc.

## Drilling Cycles
Drilling often uses "Canned Cycles" like **G81** to simplify code. Instead of writing multiple lines to go down, stop, and come up, a single G81 block tells the machine to handle the whole hole.

## Connections

- [[NC Code Syntax and G-M Codes]] — the basic grammar used here
- [[Positioning and Compensation|Absolute vs Incremental]] — how X and Y values are interpreted
- [[Lathe Programming]] — how these concepts differ for parts that spin

---

## Worked Examples

> [!example]- 90° CW Arc Example (click to expand)
> **Goal:** Arc from (5,4) to (7,2) with center at (5,2).
> **Start:** (5,4)
> **End:** (7,2)
> **Center:** (5,2)
> **I-offset:** Center(5) - Start(5) = 0
> **J-offset:** Center(2) - Start(4) = -2
> **Code:** `G02 X7.0 Y2.0 I0.0 J-2.0`

---

[[Ch4 Home]] · [[MMET 380 Hub]]
