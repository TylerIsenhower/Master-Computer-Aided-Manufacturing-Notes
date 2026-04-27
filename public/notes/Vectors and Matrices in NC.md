---
chapter: 3
type: concept
status: reviewing
difficulty: high
last-reviewed: 
mastery: 1
summary: "Translating and rotating coordinates using matrices; part offsets vs tool offsets; the right-hand rule for rotations"
equations:
  - name: "Translation Matrix"
    latex: "P_B = P_A + T"
    notes: "New position equals old position plus translation vector"
  - name: "2D Rotation Matrix (about Z-axis)"
    latex: "P_B = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix} P_A"
    notes: "Rotates coordinates by angle theta"
  - name: "3D Rotation about X-axis"
    latex: "R_x(\\alpha) = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\alpha & -\\sin\\alpha \\\\ 0 & \\sin\\alpha & \\cos\\alpha \\end{bmatrix}"
    notes: "Roll"
  - name: "3D Rotation about Y-axis"
    latex: "R_y(\\beta) = \\begin{bmatrix} \\cos\\beta & 0 & \\sin\\beta \\\\ 0 & 1 & 0 \\\\ -\\sin\\beta & 0 & \\cos\\beta \\end{bmatrix}"
    notes: "Pitch"
  - name: "3D Rotation about Z-axis"
    latex: "R_z(\\gamma) = \\begin{bmatrix} \\cos\\gamma & -\\sin\\gamma & 0 \\\\ \\sin\\gamma & \\cos\\gamma & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}"
    notes: "Yaw"
---

# Vectors and Matrices in NC

#mmet380 #ch3 #concept

## In Plain English

When a CNC machine mills a curved slot, it isn't drawing a curve — it is rapidly calculating thousands of tiny straight-line coordinate points. To find these points, the computer uses vectors (which store X, Y, and Z coordinates) and multiplies them by rotation matrices to spin them around, or adds translation vectors to slide them across the table. Before any cutting happens, the machinist must tell the machine where the raw block of material actually sits on the table (Part Offset) and exactly how long the drill bit is (Tool Offset).

## Vector and Matrix Representation

A position in 3D space is a vector: $\vec{P} = P_x\hat{i} + P_y\hat{j} + P_z\hat{k}$

In matrix form, this is a column vector:
$$ P = \begin{bmatrix} P_x \\ P_y \\ P_z \end{bmatrix} $$

Velocity and acceleration are the time derivatives, represented identically as column matrices of their components.

## Linear Translation

When a tool moves in a straight line from point A to point B by distances $\Delta x, \Delta y, \Delta z$, the new position is calculated by matrix addition:

$$ P_{\text{new}} = P_{\text{old}} + T = \begin{bmatrix} P_x \\ P_y \end{bmatrix} + \begin{bmatrix} \Delta x \\ \Delta y \end{bmatrix} = \begin{bmatrix} P_x + \Delta x \\ P_y + \Delta y \end{bmatrix} $$

## Rotation

When a tool moves along a curve (circular interpolation), the new coordinates are found by multiplying the position matrix by a **rotation matrix**.

For a 2D rotation of angle $\theta$ about the Z-axis:
$$ \begin{bmatrix} P_{x,\text{new}} \\ P_{y,\text{new}} \end{bmatrix} = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix} \begin{bmatrix} P_{x,\text{old}} \\ P_{y,\text{old}} \end{bmatrix} $$

In 3D space, rotation matrices exist for the X, Y, and Z axes (see Equations).

> [!important] Right-Hand Rule for Rotation
> The sign of the rotation angle is determined by the right-hand rule:
> 1. Point your right thumb in the **positive direction** of the rotation axis.
> 2. Curl your fingers.
> 3. The direction your fingers curl is the **positive** rotation direction ($+\theta$).

## Coordinate Systems and Offsets

A CNC machine tracks two separate coordinate systems:
- **Machine Coordinate System (Global):** The absolute $(0,0,0)$ home position of the machine table.
- **Part Coordinate System (Local):** The $(0,0,0)$ position on the workpiece itself, chosen by the programmer for ease of math.

### Part Offset
The translation vector connecting the Machine Origin to the Part Origin. Because parts are clamped in different places on the table every time, the operator must jog the machine to the part's corner and set the Part Offset in the machine's computer before running the code. (Usually X and Y distances).

### Tool Offset
The distance from the machine's spindle face to the actual tip of the cutting tool. Because every drill bit or endmill has a different length, each tool gets a unique tool offset entered into the machine's memory. (Usually Z distance).

## Connections

- [[Matrices and Matrix Operations]] — the underlying arithmetic used to process these vectors
- [[CNC Machines]] — the physical implementation of these coordinate systems
- [[Computer-Aided Design (CAD)]] — CAD software defines the Local Part Coordinate System

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch3 Home]] · [[MMET 380 Hub]]
