````markdown
### Paano mag-clone sa PC mo locally

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git

---

### Steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GeraldV3/exam-generator.git
````

2. **Navigate into the project directory:**

   ```bash
   cd exam-generator
   ```

3. **Gumawa ng sarili mong local branch for safe experimentation:**

   ```bash
   git switch -c pangalan-ng-feature-o-functionality-na-gagawin-mo
   ```

4. **I-check kung nasa tamang branch ka:**

   ```bash
   git status
   ```

5. **Install all dependencies:**

   ```bash
   npm install
   ```

6. **Siguraduhing naka-ignore ang `node_modules` folder sa `.gitignore`:**

   * Kung wala pa, gumawa ng `.gitignore` file sa root ng project at isulat ito:

     ```
     node_modules
     ```

---

### Paano mag-start ng Development Server (para makita ang itsura ng website sa local PC)

1. **I-type sa terminal sa loob ng project folder:**

   ```bash
   npm start
   ```

2. **Pindutin `Ctrl + C` para i-stop kapag tapos ka na.**

---

### Paano mag-push ng changes at gumawa ng Pull Request (PR)

1. **Gumawa o baguhin ang mga files na kailangan para sa feature/fix mo.**

2. **I-check ang status ng mga changes:**

   ```bash
   git status
   ```

3. **I-add ang mga binago mong files:**

   ```bash
   git add .
   ```

4. **Gumawa ng commit na may malinaw na message:**

   ```bash
   git commit -m "Descriptive message tungkol sa feature o fix"
   ```

5. **I-push ang branch mo sa remote repository:**

   ```bash
   git push origin pangalan-ng-branch-mo
   ```

6. **Pumunta sa GitHub repo ([https://github.com/GeraldV3/exam-generator](https://github.com/GeraldV3/exam-generator))**

7. **Makikita mo doon ang prompt na gumawa ng Pull Request. I-click ito.**

8. **Sa PR description, ilagay kung ano ang ginawa mong changes.**

9. **I-submit ang Pull Request. Hintayin ang review at approval.**


````markdown
---

### Paano mag-pull ng bagong updates mula sa `main` branch o ibang branches

1. **Siguraduhing nasa tamang local branch ka kung saan mo gustong i-merge ang updates:**

   Halimbawa, kung nasa feature branch ka:
   ```bash
   git switch pangalan-ng-feature-branch-mo
````

2. **I-pull ang latest updates mula sa `main` branch papunta sa current branch mo:**

   ```bash
   git pull origin main
   ```

   > Ginagamit ito kapag gusto mong isama ang mga latest updates ng `main` sa feature branch mo.

3. **Kung gusto mong i-pull ang updates mula sa ibang branch (halimbawa `dev`):**

   ```bash
   git pull origin dev
   ```

4. **Ayusin ang merge conflicts kung meron. Sundin ang instructions ni Git sa terminal.**

5. **I-commit ang resolved conflicts kung kinakailangan:**

   ```bash
   git add .
   git commit -m "Resolved merge conflicts from main"
   ```

6. **Optional: I-push ang updated branch mo sa remote kung gusto mong i-sync ang merged state:**

   ```bash
   git push
   ```

---

### Summary:

* `git pull origin main` → ginagamit kapag gusto mong kunin ang latest updates ng `main`.
* Make sure nasa tamang branch ka bago mag-pull.
* Resolve conflicts kung meron, tapos i-commit at i-push kung kinakailangan.

