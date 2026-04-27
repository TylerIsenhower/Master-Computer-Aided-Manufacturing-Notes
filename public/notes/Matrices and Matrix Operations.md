---
chapter: 3
type: concept
status: reviewing
difficulty: medium
last-reviewed: 
mastery: 1
summary: "Matrix math fundamentals required for CNC motion calculation: addition, multiplication, determinants, and inverses"
equations:
  - name: "Matrix Transpose"
    latex: "A = [a_{ij}] \\implies A^T = [a_{ji}]"
    notes: "Swap rows and columns"
  - name: "2x2 Determinant"
    latex: "\\det(A) = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc"
    notes: "Cross multiply and subtract"
  - name: "2x2 Inverse"
    latex: "A^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}"
    notes: "Swap diagonal, negate off-diagonal, divide by determinant"
  - name: "Matrix Inverse Relation"
    latex: "A \\cdot A^{-1} = I"
    notes: "A matrix multiplied by its inverse yields the identity matrix"
---

# Matrices and Matrix Operations

#mmet380 #ch3 #concept

## In Plain English

Computers do not intuitively "understand" 3D space. To command a tool to move from point A to point B, the CNC controller stores coordinates as grids of numbers called matrices. To translate, rotate, or scale those coordinates, the computer performs matrix operations. Matrix addition moves things in straight lines; matrix multiplication handles complex rotations. Because there is no "matrix division," we use the matrix inverse to reverse operations.

## Basic Definitions

A matrix $A = [a_{ij}]$ stores data in rows ($i$) and columns ($j$).

### Matrix Addition and Subtraction
- Matrices must have the **exact same shape** (same number of rows and columns).
- Add or subtract the corresponding elements.

### Scalar Multiplication
- Multiply a single number (scalar) by a matrix.
- Multiply that scalar to **every element** in the matrix.

### Matrix Transpose ($A^T$)
- Swap the rows and columns of the matrix. The 1st row becomes the 1st column, 2nd row becomes 2nd column, etc.

## Matrix Multiplication

Unlike standard multiplication, matrix multiplication has strict size requirements and is **not commutative** ($A \times B \neq B \times A$).

- **Shape Rule:** The number of **columns** of the 1st matrix must equal the number of **rows** of the 2nd matrix.
- $[m \times n] \times [n \times p] = [m \times p]$
- **Calculation:** Each element in the result is the sum of the products of the corresponding row of the first matrix and column of the second matrix (dot product).

## Determinants

The determinant is a scalar number calculated from a **square matrix**.

### 2x2 Determinant
$$ \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc $$

### 3x3 Determinant
Expand using any row or column, following the **sign matrix**:
$$ \begin{bmatrix} + & - & + \\ - & + & - \\ + & - & + \end{bmatrix} $$

Example expanding along the 1st row:
$$ \det(A) = a\begin{vmatrix} e & f \\ h & i \end{vmatrix} - b\begin{vmatrix} d & f \\ g & i \end{vmatrix} + c\begin{vmatrix} d & e \\ g & h \end{vmatrix} $$

> [!tip] Expansion Trick
> To calculate a 3x3 determinant manually, expand using a row or column that contains zeroes — it eliminates entire terms and makes the math much faster.

## Matrix Inversion

There is no "division" for matrices. Instead, we multiply by the **inverse matrix** ($A^{-1}$). 

- If $A \times A^{-1} = I$ (where $I$ is the Identity Matrix, consisting of 1s on the diagonal and 0s elsewhere).
- If $\det(A) = 0$, the matrix has **no inverse** (it is singular).

### Quick 2x2 Inverse
$$ A = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \implies A^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix} $$

### 3x3 Inverse Procedure
1. Calculate the determinant.
2. Find the **cofactor matrix** (apply the sign matrix to the 2x2 determinant of the remaining elements for each position).
3. **Transpose** the cofactor matrix.
4. Divide the transposed cofactor matrix by the original determinant.

## CNC Formatting Rules

> [!warning] CNC Data Formatting
> CNC systems do not understand symbols like $\pi$, $\sqrt{2}$, or fractions.
> - **All values** must be converted to numerical decimals.
> - A decimal point is required for all integers (e.g., `5.000` instead of `5`).
> - Often, 4 decimal places are used for inches, and 3 for millimeters.

## Connections

- [[Vectors and Matrices in NC]] — applying these operations to calculate tool paths
- [[History of Numerical Control]] — the computers that perform these calculations rapidly
- [[CNC Machines]] — the hardware that physically executes the calculated matrices

---

## Worked Examples

> [!example]- Examples (click to expand)
> Add worked examples here as you study.

---

[[Ch3 Home]] · [[MMET 380 Hub]]
