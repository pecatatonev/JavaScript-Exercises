window.addEventListener("load", solve);

function solve() {
    const studentNameLabelElement = document.getElementById('student');
    const universityLabelElement = document.getElementById('university');
    const scoreLabelElement = document.getElementById('score');
    const buttonNextElement = document.getElementById('next-btn');
    const previewListElement = document.getElementById('preview-list');
    const candidateListElement = document.getElementById('candidates-list');

    buttonNextElement.addEventListener("click", () => {
      const studentName = studentNameLabelElement.value;
      const university = universityLabelElement.value;
      const score = scoreLabelElement.value;

      if(!studentName || !university || !score){
        return;
      }
        console.log(studentName);
        const nameInArticleElement = document.createElement('h4');
        nameInArticleElement.textContent =  studentName;

        const universityInArticleElement = document.createElement('p');
        universityInArticleElement.textContent = `University: ${university}`;

        const scoreInArticleElement = document.createElement('p');
        scoreInArticleElement.textContent = `Score: ${score}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(nameInArticleElement);
        articleElement.appendChild(universityInArticleElement);
        articleElement.appendChild(scoreInArticleElement);

        const buttonElement = document.createElement('button');
        buttonElement.classList.add('action-btn');

        const buttonEditElement = buttonElement.cloneNode();
        buttonEditElement.classList.add('edit')
        buttonEditElement.textContent = 'Edit';

        const buttonApplyElement = buttonElement.cloneNode();
        buttonApplyElement.classList.add('apply')
        buttonApplyElement.textContent = 'Apply';

        const listItemElement = document.createElement('li');
        listItemElement.className = "application";
        listItemElement.appendChild(articleElement);
        listItemElement.appendChild(buttonEditElement);
        listItemElement.appendChild(buttonApplyElement);

        previewListElement.appendChild(listItemElement);

        buttonNextElement.disabled = true;

        studentNameLabelElement.value = '';
        universityLabelElement.value = '';
        scoreLabelElement.value = '';

        buttonEditElement.addEventListener("click", (e) => {
          studentNameLabelElement.value = studentName;
          universityLabelElement.value = university;
          scoreLabelElement.value = score;

          listItemElement.remove();
          buttonNextElement.disabled = false;
        })

        buttonApplyElement.addEventListener("click", (e) => {
          buttonApplyElement.remove();
          buttonEditElement.remove();
          candidateListElement.appendChild(listItemElement);
          buttonNextElement.disabled = false;
        })
      });
  }
  