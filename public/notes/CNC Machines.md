---
chapter: 3
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Consolidating axes of motion into position and velocity matrices for 3, 4, and 5-axis machines"
equations:
  - name: "3-Axis Position & Velocity"
    latex: "P = \\begin{bmatrix} x_P \\\\ y_P \\\\ z_P \\end{bmatrix}, \\quad V = \\begin{bmatrix} v_{Px} \\\\ v_{Py} \\\\ v_{Pz} \\end{bmatrix}"
    notes: "Determined by number of pulses and pulse frequency, respectively"
  - name: "4-Axis Position & Velocity"
    latex: "P = \\begin{bmatrix} x_P \\\\ y_P \\\\ z_P \\\\ A \\end{bmatrix}, \\quad V = \\begin{bmatrix} v_{Px} \\\\ v_{Py} \\\\ v_{Pz} \\\\ \\omega_A \\end{bmatrix}"
    notes: "Adds one rotational axis A"
  - name: "5-Axis Position & Velocity"
    latex: "P = \\begin{bmatrix} x_P \\\\ y_P \\\\ z_P \\\\ A \\\\ B \\end{bmatrix}, \\quad V = \\begin{bmatrix} v_{Px} \\\\ v_{Py} \\\\ v_{Pz} \\\\ \\omega_A \\\\ \\omega_B \\end{bmatrix}"
    notes: "Adds two rotational axes A and B"
---

# CNC Machines

#mmet380 #ch3 #concept

## In Plain English

A CNC machine is essentially a very powerful, highly precise industrial robot. It relies on a built-in microcomputer to constantly calculate exactly where the cutting tool is and how fast it is moving. To handle complex 3D shapes (like a turbine blade or an aerospace bracket), modern machines don't just move left/right, forward/back, and up/down (3 axes); they also tilt and rotate the part or the spindle (4 and 5 axes). The computer manages all these simultaneous movements by updating massive column matrices thousands of times a second.

## Multi-Axis Matrix Control

A machine's capability is largely defined by its number of axes (degrees of freedom). For every axis a machine has, its internal position and velocity matrices gain an additional row.

- **Position matrices** are determined by the cumulative **number of electrical pulses** sent to each motor.
- **Velocity matrices** are determined by the **pulse frequency** sent to each motor.

### 3-Axis Machines

A standard CNC mill moves in X, Y, and Z.

**Position Matrix:** 
$$ P = \begin{bmatrix} x_P \\ y_P \\ z_P \end{bmatrix} $$

**Velocity Matrix:**
$$ V = \begin{bmatrix} v_{Px} \\ v_{Py} \\ v_{Pz} \end{bmatrix} $$

### 4-Axis Machines

Adds a rotational axis (often denoted A, rotating about the X-axis) to the standard three linear axes. Commonly implemented as a rotary table holding the workpiece.

**Position Matrix:** 
$$ P = \begin{bmatrix} x_P \\ y_P \\ z_P \\ A \end{bmatrix} $$

**Velocity Matrix:**
$$ V = \begin{bmatrix} v_{Px} \\ v_{Py} \\ v_{Pz} \\ \omega_A \end{bmatrix} $$
*(Where $\omega_A$ is the angular velocity of the A-axis).*

### 5-Axis Machines

Adds a second rotational axis (often denoted B, rotating about the Y-axis). This allows the cutting tool to approach the part from almost any angle, crucial for complex contoured surfaces.

**Position Matrix:** 
$$ P = \begin{bmatrix} x_P \\ y_P \\ z_P \\ A \\ B \end{bmatrix} $$

**Velocity Matrix:**
$$ V = \begin{bmatrix} v_{Px} \\ v_{Py} \\ v_{Pz} \\ \omega_A \\ \omega_B \end{bmatrix} $$

## Connections

- [[Position and Speed Control]] — the actual electrical signals (pulses) that populate these matrices
- [[Vectors and Matrices in NC]] — how the machine calculates the required target positions
- [[Computer-Aided Design (CAD)]] — CAD systems use solid modeling to generate the paths that these 5-axis machines follow

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch3 Home]] · [[MMET 380 Hub]]
