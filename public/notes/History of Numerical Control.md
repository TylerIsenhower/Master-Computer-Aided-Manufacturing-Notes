---
chapter: 3
type: concept
status: reviewing
difficulty: low
last-reviewed: 
mastery: 1
summary: "Evolution of machining from manual turning to modern computer numerical control (CNC)"
equations: []
---

# History of Numerical Control

#mmet380 #ch3 #concept

## In Plain English

Machining used to rely entirely on the skill and muscle of human operators manipulating handwheels. Over centuries, this evolved into mechanical automation using cams and followers. The real breakthrough came in the 1940s and 50s with Numerical Control (NC) — using punched tape with numbers to control motors. When computers became small and cheap enough to embed directly into the machines, NC became CNC (Computer Numerical Control), revolutionizing manufacturing by allowing complex, repeatable, and precise automated cuts.

## Timeline of Machining Evolution

| Era / Year | Development |
|------------|-------------|
| **300 BC** | Basic turning operations appear |
| **1400s** | Machining of metals begins |
| **1700s** | Machine tools developed for the Industrial Revolution |
| **1800s** | Commercially available machine tools |
| **1900s** | High-speed steel tools; concept of mass production; machine tools with mechanical controls (cams and followers) |
| **1947** | First **Numerical Control (NC)** concept introduced |
| **1952** | First NC milling machine demonstrated |
| **1958** | MIT invents **G-codes** (the programming language of CNC) |
| **1960s** | Transition to **Computer Numerical Control (CNC)** |

## The Shift to CNC

In modern manufacturing (as of the late 2010s/2020s), major machine tool manufacturers are concentrated in Europe and Asia (e.g., Komatsu, AMADA, Okuma, DMG Mori).

The fundamental purpose of Numerical Control is to automate the motion of a tool (or part) from one location to another. This precise positioning is required to:
- Move the cutting tool to the starting position
- Move the tool relative to the part to remove material (machining)
- Join material (e.g., laser welding)
- Add material (e.g., 3D printing)

Because a computer is controlling this motion, coordinates and trajectories must be calculated continuously. This calculation of coordinates in complex 3D space is performed using **matrix algebra**.

## Connections

- [[Matrices and Matrix Operations]] — the mathematical foundation underlying CNC motion
- [[Computer-Aided Design (CAD)]] — the digital models that are converted into G-code for CNC machines
- [[CNC Machines]] — the modern equipment that executes these numerical instructions

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch3 Home]] · [[MMET 380 Hub]]
