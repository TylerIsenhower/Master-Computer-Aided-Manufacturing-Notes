---
chapter: 4
type: concept
status: reviewing
difficulty: low
last-reviewed: 
mastery: 1
summary: "Overview of NC program components and the historical evolution of program storage media"
equations: []
---

# Introduction to CAM and NC Programming

#mmet380 #ch4 #concept

## In Plain English

Computer-Aided Manufacturing (CAM) uses software to control machine tools. To tell a machine what to do, we provide it with an **NC Program**—a list of instructions that specify everything from the tool path and speed to whether the coolant should be on. In the early days, these programs were literally holes punched into paper tape; today, they are digital files transferred via USB or network, but the underlying "language" of numbers and letters remains the standard for the industry.

## Components of an NC Program

An NC program isn't just a list of coordinates. It contains several types of information:

| Function Type | Purpose | Examples |
|---------------|---------|----------|
| **Preparatory** | Sets the machine state | Units (inch/mm), Absolute/Incremental mode |
| **Coordinate** | Defines movement | X, Y, Z translational; A, B, C rotational |
| **Machining** | Sets cutting variables | Spindle speed (S), Feed rate (F) |
| **Tool Control** | Manages the hardware | Tool number (T), Tool changes |
| **Cycle Functions**| Automates tasks | Drilling, reaming, or boring cycles |
| **Miscellaneous** | Accessory control | Coolant on/off (M), Spindle direction |

## Historical Data Storage

The methods used to transport NC codes from a computer to a CNC system have evolved significantly:

- **Punched Tape/Cards:** Inexpensive but fragile. Paper tapes often failed in wet or humid machining zones due to fuzzy edges or moisture.
- **Mylar Tape:** A polymer-based tape that solved the durability issues of paper.
- **Magnetic Tape/Floppy Disks:** Later digital transitions (now mostly obsolete).
- **Modern Media:** USB thumb drives, Ethernet, and direct Serial/DNC transfers.

## Program "Etiquette"

Because NC programs are often modified or shared, good programming practice is essential:
- **Comments:** Use brackets `(---)` to add notes that the machine ignores.
- **Metadata:** Include the date, programmer name, part number, and version at the start.
- **Start/End:** Many systems (like Haas) use percentage signs `%` to mark the beginning and end of a program file.

## Connections

- [[NC Code Syntax and G-M Codes]] — the specific language used within these programs
- [[History of Numerical Control]] — the origins of these automated systems
- [[Computer-Assisted Part Programming (CAM)]] — how computers help generate these programs automatically

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch4 Home]] · [[MMET 380 Hub]]
