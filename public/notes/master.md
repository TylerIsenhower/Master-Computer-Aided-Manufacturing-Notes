# MMET 380 — Master Study Guide

## 1. Technical Drawing

### Orthographic Projection
Orthographic projection is the standard method of representing a 3D object on a 2D plane by projecting its views along principal axes.

#### First-Angle vs. Third-Angle Projection
- **Third-Angle Projection (Standard in USA):** The object is imagined inside a transparent box. Views are projected onto the faces of the box and unfolded outward. 
    - *Layout:* Top view is above the Front view; Right view is to the right of the Front view.
    - *Symbol:* Truncated cone with the large end toward the circle.
- **First-Angle Projection (International):** The object is imagined in front of the projection plane. 
    - *Layout:* Top view is below the Front view; Right view is to the left of the Front view.
    - *Symbol:* Truncated cone with the small end toward the circle.

#### Line Types
| Line Type | Appearance | Purpose |
| :--- | :--- | :--- |
| **Visible** | Solid, thick | Represents visible edges and contours. |
| **Hidden** | Dashed, medium | Represents edges or features behind the visible surface. |
| **Center** | Long-short dash, thin | Indicates axes of symmetry, hole centers, or circular paths. |
| **Extension/Dimension** | Solid, thin | Used to indicate the extent and value of a dimension. |

#### Drawing Threads
- **External Threads:** Represented with a solid outer circle and a dashed/incomplete inner circle in end views.
- **Internal Threads (Tapped Holes):** Represented with a dashed/incomplete outer circle and a solid inner circle in end views.
- **Notation:** e.g., `M10 x 1.5` (Metric, 10mm diameter, 1.5mm pitch) or `1/2-13 UNC` (Inch, 1/2" diameter, 13 threads per inch, Unified Coarse).

### Isometric Projection
A pictorial representation where the three principal axes make equal angles (120°) with each other. 
- **Scale:** Features are foreshortened (typically to 82% of true size), but **Isometric Drawings** use full scale for convenience.
- **Purpose:** Used for quick visualization of 3D forms without requiring multiple views.

### Auxiliary Views
Used to show the **true shape** of a surface that is slanted (oblique) relative to the principal planes of projection.
- **Method:** The projection is made perpendicular to the slanted surface.
- **Partial Auxiliaries:** Often preferred, showing only the slanted feature to maintain clarity.

### Sectioning
Used to reveal internal features that would otherwise be obscured by hidden lines.
- **Full Section:** The cutting plane passes entirely through the object.
- **Half Section:** The cutting plane passes halfway, showing half in section and half as an exterior view.
- **Rules:** Cross-hatching (section lining) is used on the material cut by the plane. Arrows on the cutting plane line indicate the viewing direction.

### Dimensioning
The process of adding size and location information to a drawing.
- **Bilateral Tolerance:** Variation allowed in both directions (e.g., $1.00 \pm 0.02$).
- **Unilateral Tolerance:** Variation allowed in only one direction (e.g., $1.00 ^{+0.03}_{-0.00}$).
- **Limit Tolerance:** Max and min sizes stated explicitly (e.g., $1.02 / 0.98$).

---

## 2. Computer-Aided Design (CAD)

CAD systems enable parametric solid modeling and digital drafting.

### Core Concepts
- **Parametric Modeling:** Geometry is driven by dimensions and constraints (relationships like parallel, tangent, or concentric).
- **Feature-Based Modeling:** Parts are built using a sequence of operations (Extrude, Revolve, Sweep, Loft).
- **Boolean Operations:** 
    - **Union:** Combining two solids into one.
    - **Subtraction:** Using one solid to cut a shape out of another.
    - **Intersection:** Keeping only the volume shared by two solids.
- **Assemblies:** Combining multiple part files into a single system using "mates" or constraints to define their relative motion and position.

---

## 3. Numerical Control (NC)

### History
- **Jacquard Loom (1801):** First use of punched cards to control a machine.
- **John Parsons (1940s):** Pioneered the use of data points to control machine tool paths for helicopter rotor blades.
- **Evolution:** From Hardwired NC (vacuum tubes/relays) to CNC (microprocessors) and DNC (Distributed Numerical Control).

### Underlying Math
- **Coordinate Systems:** Cartesian (X, Y, Z) is standard. Right-hand rule determines positive axis directions.
- **Interpolation:** The controller's ability to calculate intermediate points along a path.
    - **Linear:** A straight line between two points.
    - **Circular:** An arc defined by a radius or center point (I, J, K).

### Control Classification
- **Open-Loop:** No feedback. The controller sends pulses to a **stepper motor**, assuming it moves. Simple but prone to error if the motor stalls.
- **Closed-Loop:** Utilizes an **encoder** or sensor to provide feedback. The controller compares the actual position to the target and adjusts the **servo motor** to compensate for errors.

### CNC Machines
- **Axes:** Standard 3-axis (X, Y, Z). 4th and 5th axes add rotation (A, B, or C axes).
- **Configurations:**
    - **VMC (Vertical Machining Center):** Spindle is vertical; best for flat parts.
    - **HMC (Horizontal Machining Center):** Spindle is horizontal; allows for better chip evacuation and multi-sided machining.
    - **Turning Center:** A CNC lathe.

---

## 4. Computer-Aided Manufacturing (CAM)

### NC Programming
The translation of CAD geometry into G-code instructions for the machine.

#### Mill Programming (G-Code)
- `G00`: Rapid positioning (non-cutting).
- `G01`: Linear interpolation (cutting at a specified feed rate).
- `G02/G03`: Circular interpolation (CW/CCW).
- `M03/M05`: Spindle ON/OFF.
- `M06`: Tool change.

#### Lathe Programming
Similar to milling but often uses **Diameter programming** (X-axis value is the diameter, not the radius). Cycles like `G71` (Roughing) and `G70` (Finishing) are used to simplify complex code.

### Computer-Assisted Programming (CAM)
Instead of writing G-code manually, an engineer selects surfaces and tools in a CAM environment (like Fusion 360). 
- **Toolpaths:** The software automatically calculates the "step-over" and "step-down" for the tool.
- **Post-Processing:** The generic toolpath is converted into a specific G-code dialect (e.g., Fanuc, Haas, or Mazak) for a particular machine.

---

## 5. Manufacturing Systems

### Automated Production Lines
Designed for high-volume, low-variety production.
- **Metrics:**
    - **Ideal Cycle Time ($T_c$):** Time to produce one part if no breakdowns occur.
    - **Actual Production Time ($T_p$):** Includes average downtime ($T_p = T_c + F \cdot T_d$).
    - **Line Efficiency ($E$):** $T_c / T_p$.
- **Transfer Mechanisms:** Rotary (indexing), Linear, Walking Beam, or Geneva mechanism.

### Group Technology (GT) & Cellular Manufacturing
Grouping similar parts into "Part Families" to streamline production.
- **Cells:** Machines are arranged in a "U-shape" to allow a single operator to manage multiple processes.

### Flexible Manufacturing Systems (FMS)
A highly automated cell that combines NC machines with an automated material handling system (like a robot or AGV).
- **Capability:** Can produce a wide variety of parts with virtually zero "set-up" time between different designs.

### Modern Manufacturing Paradigms
- **Mass Customization:** Delivering unique products for every customer at mass-production costs.
- **Reconfigurable Manufacturing (RMS):** Systems designed for rapid change in structure to adjust production capacity and functionality.
- **Lean Manufacturing (The Toyota Way):** Focus on the elimination of **Muda (Waste)** across 8 categories: Overproduction, Waiting, Transport, Over-processing, Inventory, Movement, Defects, and Underutilized talent.
- **Agile Manufacturing:** Prioritizes speed and flexibility to respond to rapidly changing market demands.

---

## 6. Machining

### Cutting Mechanics
- **Milling:** Tool rotates; workpiece moves. Parameters: Cutting Speed ($v$), Feed ($f$), Depth of Cut ($d$).
- **Turning:** Workpiece rotates; tool moves. Performed on a Lathe.
- **Cutting Tools:** Analyzed using the **Taylor Tool Life Equation**: $V \cdot T^n = C$ (where V = speed, T = time, n/C are constants).

### Finishing Processes
Used when secondary machining (Milling/Turning) cannot meet required tolerances or surface finish.
- **Grinding:** Uses an abrasive wheel. Modes: Rubbing, Plowing, Machining (actual cutting).
- **Honing:** Internal grinding for precision holes.
- **Lapping/Polishing/Buffing:** Abrasive processes used to level microscopic peaks and create high-gloss finishes.
- **Deburring:** Removing sharp "burrs" through manual, mechanical, or thermal methods.

### Machining Economics
Finding the "Sweet Spot" cutting speed:
- **$V_{min\_cost}$:** The speed that minimizes the total cost per part (machine time + tool cost).
- **$V_{max\_production}$:** The speed that maximizes the output rate, even if tool costs increase.

### Tolerance & Finish
- **Surface Finish ($R_a$):** The average roughness height. Predicted by tool nose radius and feed rate: $h = f^2 / (32 \cdot R)$.
- **Cutting Fluids:** Act as both **Coolant** (removes heat) and **Lubricant** (reduces friction).

---

## 7. Geometric Dimensioning & Tolerancing (GD&T)

GD&T defines the allowable variation in form, orientation, and location.

### Fundamentals
- **Datums:** Theoretical points, lines, or planes used as references.
    - **3-2-1 Rule:** Primary datum (3 points), Secondary (2 points), Tertiary (1 point) to lock all 6 Degrees of Freedom.
- **Measuring Devices:** Calipers (general), Micrometers (high precision), Dial Indicators (wobble/flatness), V-blocks (cylindrical support).

### Geometric Controls
| Type | Controls |
| :--- | :--- |
| **Form** | Straightness, Flatness, Roundness (Circularity), Cylindricity. |
| **Profile** | Profile of a Line, Profile of a Surface. |
| **Orientation**| Parallelism, Angularity, Perpendicularity. |
| **Location** | **Positional Tolerance** (True Position), Concentricity, Symmetry. |
| **Runout** | Circular Runout, Total Runout. |

### Modifiers
- **MMC (M):** Maximum Material Condition (Smallest hole, Largest pin).
- **LMC (L):** Least Material Condition (Largest hole, Smallest pin).
- **RFS:** Regardless of Feature Size (Fixed tolerance zone; the default).

---

## 8. Metrology

Metrology is the science of measurement and verification.

### Inspection Systems
- **CMM (Coordinate Measuring Machine):** Uses a touch-trigger probe to map 3D coordinates.
- **Vision Systems:** High-speed camera-based inspection for assembly lines.
- **Profile Projector:** An optical comparator that shines a light past a part to create a 2D silhouette for manual measurement.

### Specialized Measurement
- **Air Gaging:** Measures hole diameter by sensing back-pressure in a pneumatic probe.
- **Non-Contact Sensors:** 
    - **Capacitive:** Measures tiny gaps using electrical capacitance.
    - **Laser:** Distance measurement and 3D surface scanning.
- **Micro-Scale:**
    - **SEM (Scanning Electron Microscopy):** Uses electrons for extreme magnification.
    - **CT (Computed Tomography):** X-ray based 3D internal volume scanning.
    - **AFM (Atomic Force Microscopy):** Probes surfaces at the atomic level.
- **Surface & Form:**
    - **Interferometry:** Uses light wave interference for extreme flatness measurement.
    - **Profilometry:** Contact stylus or digital 3D optical scanning to map $R_a$ roughness.
