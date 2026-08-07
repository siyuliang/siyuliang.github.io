---
layout: page
permalink: /teaching/ling430/fall26/
# title: LING 430 Syllabus
# description: Fall 2026
nav: false
navbar_title: LING 430 Fall 2026
hide_navbar_links: true
hide_footer: true
---

# LING 430: Computational Linguistics

[Information](#information) · [Coursework](#coursework) · [Policies](#policies) · [Schedule](#schedule)

## Information {#information}

### Course description

Computational linguistics combines insights from linguistics and computer science to study language with computational tools and to build language technologies. This course offers a hands-on, beginner-friendly introduction to the field. We will learn Python while working with real language data and will connect each computational method to the linguistic assumptions it makes.

The course begins with programming, development tools, representations of language, and text processing. We then move through symbolic approaches such as regular expressions and computational morphology; statistical approaches such as n-gram language models, Naive Bayes, regression, and sequence labeling; and contemporary approaches using neural networks, embeddings, and large language models. Later in the semester, we bring these methods together through linguistic corpus analysis and automatic speech recognition. Throughout the course, we will examine evaluation, error analysis, data documentation, bias, and the social consequences of language technology.

No previous programming experience is assumed. Students should, however, expect to practice consistently: programming skills build cumulatively, and later work depends on the foundations developed early in the semester.

### Learning outcomes

By the end of the course, you will be able to:

- Write, run, test, and debug programs in Python.
- Use a command-line interface, a code editor, and Git for reproducible work.
- Process text using strings, regular expressions, tokenization, and Unicode-aware methods.
- Explain and implement introductory computational models of morphology, language modeling, classification, sequence labeling, and parsing, and describe the main components of an automatic speech-recognition system.
- Work with linguistic corpora, annotations, metadata, and data documentation.
- Evaluate NLP systems using appropriate metrics and systematic error analysis.
- Explain how linguistic theory and data choices affect computational models.
- Critically assess the capabilities, limitations, biases, and social implications of current language technologies, including large language models.
- Communicate computational linguistic research clearly to technical and nontechnical audiences.

### Prerequisites

ANTH 200/LING 200 or instructor approval. No prior coursework in programming or computer science is required.

### Meeting times and format

This course is taught **in person**. Class meetings will combine short lectures, discussion, live coding, and individual or group activities. Please bring a laptop to every class.

| Days | Time | Location |
|---|---|---|
| Tuesday & Thursday | 2:30-3:45 PM | Herring 125 |

### Instructor

| Name | Email | Office | Office hours |
|---|---|---|---|
| [Siyu Liang](https://siyuliang.github.io/) | siyu.liang@rice.edu | Herring 205 | TBD |

### Texts and readings

All required readings will be available at no cost through open-access sources or Canvas. We will draw selectively from the following references rather than read any one book from beginning to end:

- **Downey (2015).** [*Think Python* (2nd ed.)](https://greenteapress.com/wp/think-python-2e/)
- **Jurafsky & Martin.** [*Speech and Language Processing* (3rd ed. draft)](https://web.stanford.edu/~jurafsky/slp3/)
- **Bird, Klein, & Loper.** [*Natural Language Processing with Python*](https://www.nltk.org/book/)

Additional articles, documentation, and corpus materials will be posted on Canvas. Readings listed in the schedule are tentative and may be adjusted as the semester develops.

### Reading expectations

Some readings, especially chapters from Jurafsky & Martin, are technically dense and are also assigned in upper-level undergraduate and graduate NLP courses. For most readings in this introductory course, close reading of every equation, algorithm, or implementation detail is **not** expected. Read to familiarize yourself with the central problem, terminology, model intuition, and linguistic implications. Sections that require closer attention will be identified explicitly.

---

## Coursework {#coursework}

### Homework assignments

There will be six scaffolded homework assignments. Most will provide starter code that you will inspect, modify, and extend. In addition to working code, submissions will include short explanations or error analyses: you should understand what your program does, why it works, and where it fails. All homework deadlines fall on Thursdays at 11:59 PM.

- **HW 1: Setup, NLTK, and why NLP is hard.** Configure Python, VSCode, Git, and NLTK; practice the command line; explore a small collection of texts; and analyze linguistic ambiguity.
- **HW 2: Palindrome recognizer.** Build a command-line program using functions, loops, and string operations; document how normalization choices affect different scripts and languages.
- **HW 3: Computational morphological analyzer.** Implement or extend an analysis of word structure using simple finite-state techniques, including examples from a language other than English where feasible.
- **HW 4: N-gram story generator.** Estimate an n-gram language model, generate text, compare model orders, and analyze characteristic errors.
- **HW 5: Viterbi-HMM part-of-speech tagger.** Complete a tagger from starter code and connect tagging errors to ambiguity and annotation choices.
- **HW 6: Corpus modeling and evaluation.** Build a corpus-based model using TF-IDF, topic modeling, or another approved method; compare it with a baseline; conduct quantitative and linguistic error analysis; and write a short model card.

Homework is graded on completion rather than correctness. You will receive full credit for a genuine attempt that follows the instructions and explains your work. A clear explanation of an imperfect solution is more valuable than unexplained code that happens to run. Your lowest homework grade will be dropped, so the best five of six homework grades will count toward the final grade. Because the assignments build on one another, submit each one and review feedback promptly even if you expect it to be your dropped grade. Detailed specifications and submission instructions will be provided on Canvas.

### Paper presentation

Students will give a 10-minute presentation on a peer-reviewed computational linguistics paper, either individually or in a group of 2-3. The presentation should explain the research question, data, method, and findings; connect the work to linguistic ideas from the course; and consider possible social consequences or limitations. Clarity matters more than technical density.

Presentations will take place during the **last two class meetings, December 1 and December 3**. Paper choices are due October 29, and slides are due on the team's presentation day.

### Take-home final exam

The final is a **take-home exam due December 15**. It will focus on conceptual understanding, interpretation and correction of short code samples, pseudocode, evaluation, and the application of computational methods to language data. It will not require live coding or memorization of long programs. The exact submission time and permitted resources will be announced on Canvas.

### Grading

| Component | Weight |
|---|---:|
| Homework portfolio (best 5 of 6 assignments) | 75% |
| Paper presentation | 15% |
| Take-home final exam | 10% |
| Participation extra credit | Up to 2% |

Letter grades will be assigned using the following scale. Any curve or adjustment will only benefit students.

| Grade | Percentage | Grade | Percentage | Grade | Percentage |
|---|---:|---|---:|---|---:|
| A+ | 98-100 | A | 93-97.99 | A- | 90-92.99 |
| B+ | 87-89.99 | B | 83-86.99 | B- | 80-82.99 |
| C+ | 77-79.99 | C | 73-76.99 | C- | 70-72.99 |
| D+ | 67-69.99 | D | 63-66.99 | D- | 60-62.99 |
| F | Below 60 | | | | |

---

## Policies {#policies}

### Participation and keeping up

This course introduces programming and computational linguistics at the same time, so the material is cumulative and can move quickly. If you miss a meeting, review the posted material promptly and ask for help before the next topic builds on it.

At the instructor's discretion, up to 2% extra credit may be awarded for sustained, constructive contributions to learning in or outside class. Examples include contributing thoughtfully to class or discussion boards, supporting a study group, and helping classmates learn. Near the end of the semester, students may nominate themselves or a classmate and briefly describe the contribution. Nominations will inform, but not determine, the instructor's decision.

### Collaboration

Talking through concepts, developing high-level pseudocode together, and helping a classmate debug are encouraged. Unless an assignment says otherwise, the code and written analysis you submit must be your own. You should be able to explain every part of your submission. List anyone with whom you discussed the assignment, cite any external code, data, or ideas you use, and follow the collaboration rules stated in each assignment.

### Late work and extensions

If unexpected circumstances make it difficult to complete work on time, email the instructor as soon as possible so that we can agree on a timeline that keeps you on track. Without an approved extension or a different policy stated in the assignment, late homework loses 10% of the earned score for each 24-hour period or part thereof, up to 48 hours. 

### Use of large language models

Large language models can be useful, but they are least reliable for learners who do not yet have the technical foundation to recognize subtle errors. For that reason, you are strongly discouraged from using an LLM to generate homework code. Struggling productively with a problem, testing possible solutions, and using the debugger are central parts of learning in this course.

[Ma, Koedinger, and Wu (2025)](https://arxiv.org/abs/2509.21890) found that technical experience, rather than prior familiarity with AI tools or communication skill, was the significant predictor of success when students used an LLM for programmatic data-analysis homework. We will discuss this study during Week 1 as we establish expectations for learning with and about AI.

Unless a homework explicitly permits it, an AI assistant may be used only as a tutor: for example, to explain a concept or help interpret an error message. It may not write substantial portions of the code or analysis you submit. Any permitted use must be disclosed, and you must verify and be able to explain the resulting work. Submitting generated work that you cannot explain does not count as a genuine attempt.

### Communication

- Use the relevant Canvas discussion board for technical and logistical questions so that everyone can benefit from the answer.
- Use email for grades, accommodations, or other private matters.
- On weekdays, the instructor will normally respond to email within 24 hours; responses may take longer on weekends or university holidays. Use office hours or request an appointment for questions that require an extended discussion.

### Academic integrity

All work in this course is governed by the [Rice Honor System](https://honor.rice.edu/). Academic misconduct includes presenting another person's work as your own, consulting prior solutions or exams without permission, falsifying data or results, using unauthorized assistance, or violating an assignment's collaboration rules. Once you begin the take-home final, you may not discuss it with anyone until the exam period has ended; the final instructions will identify any resources you may use. When in doubt about collaboration, reuse of code, citation, or AI assistance, ask before submitting the work.

### Accessibility and accommodations

If a documented disability or other condition may affect your academic work, first contact Rice's [Student Disability Resource Center](https://drc.rice.edu/) to determine appropriate accommodations, and then meet with the instructor to discuss how they will be implemented in this course. Please do this as early as possible. You are also encouraged to tell the instructor about temporary conditions or other access barriers; if there is something reasonable I can do to make the course more accessible, please let me know.

### Title IX, support, and mandatory reporting

Rice prohibits harassment, sexual harassment, sexual assault, dating violence, and stalking. Under Rice policy, university employees, including the instructor, are Mandatory Reporters and must promptly share information they receive about such conduct involving a Rice student or employee with a Title IX Coordinator. Students seeking support or information about reporting and supportive measures can contact [The SAFE Office](https://safe.rice.edu/) or review [Rice's reporting options](https://safe.rice.edu/options-reporting). For an emergency, call 911 or the appropriate campus emergency service.

### Religious observances

Please notify the instructor as early as possible if a religious observance conflicts with a class meeting, assignment, presentation, or exam so that a reasonable accommodation can be arranged.

---

## Schedule {#schedule}

### Class schedule

The schedule is a working plan and may change in response to class progress. Readings are to be completed **before** the associated meeting. Unless otherwise stated, assignments are due at 11:59 PM on the listed date. The final exam has separate instructions on Canvas.

| Week | Date | Topic | Reading | Due |
|---:|---|---|---|---|
| 1 | Aug 25 | Introduction: what is computational linguistics, and why is language difficult? | | |
|  | Aug 27 | Course setup and learning computational methods in the age of LLMs | [Ma, Koedinger, & Wu (2025), “Not Everyone Wins with LLMs”](https://arxiv.org/abs/2509.21890) | HW 1 released; course survey |
| 2 | Sep 1 | Systems, the command line, Python, and NLTK basics | [Think Python, Ch. 1](https://greenteapress.com/thinkpython2/html/thinkpython2002.html)<br/>[NLTK Book, Ch. 1](https://www.nltk.org/book/ch01.html) | |
|  | Sep 3 | Variables, control flow, functions, and command-line interfaces | [Think Python, Ch. 2](https://greenteapress.com/thinkpython2/html/thinkpython2003.html)<br/>[Think Python, Ch. 5, §§5.2-5.7](https://greenteapress.com/thinkpython2/html/thinkpython2006.html) | |
| 3 | Sep 8 | Strings, lists, dictionaries, files, and input/output | [*Think Python*, Ch. 8: Strings](https://greenteapress.com/thinkpython2/html/thinkpython2009.html)<br/>[*Think Python*, Ch. 10: Lists](https://greenteapress.com/thinkpython2/html/thinkpython2011.html)<br/>[*Think Python*, Ch. 11: Dictionaries](https://greenteapress.com/thinkpython2/html/thinkpython2012.html)<br/>[*Think Python*, Ch. 14: Files](https://greenteapress.com/thinkpython2/html/thinkpython2015.html) (selected sections) | |
|  | Sep 10 | Debugging, VSCode, Git, and reproducible workflows | [VS Code: Getting Started with Python](https://code.visualstudio.com/docs/python/python-tutorial) | HW 1 due; HW 2 released |
| 4 | Sep 15 | Tokenization and regular expressions | [Jurafsky & Martin, Ch. 2: Words and Tokens](https://web.stanford.edu/~jurafsky/slp3/2.pdf) | |
|  | Sep 17 | Unicode, text normalization, and rule-based language processing | [Python Unicode HOWTO](https://docs.python.org/3/howto/unicode.html) | |
| 5 | Sep 22 | Computational morphology and finite-state methods | [NLTK Book, Ch. 3, §3.6: Normalizing Text](https://www.nltk.org/book/ch03.html#sec-normalizing-text) | |
|  | Sep 24 | Evaluation: accuracy, precision, recall, and error analysis | [scikit-learn: Precision, Recall, and F-measures](https://scikit-learn.org/stable/modules/model_evaluation.html#precision-recall-f-measure-metrics) | HW 2 due; HW 3 released |
| 6 | Sep 29 | Probability, maximum likelihood estimation, and Bayes' theorem | [Downey, *Think Bayes*, Ch. 1](https://allendowney.github.io/ThinkBayes2/chap01.html) | |
|  | Oct 1 | N-gram language models | [Jurafsky & Martin, Ch. 3: N-gram Language Models](https://web.stanford.edu/~jurafsky/slp3/3.pdf) | |
| 7 | Oct 6 | Language generation and an introduction to neural language models | [Jurafsky & Martin, Ch. 7, §§7.2 and 7.4: Conditional Generation and Sampling](https://web.stanford.edu/~jurafsky/slp3/7.pdf) | |
|  | Oct 8 | DataFrames, Naive Bayes, and document classification | [pandas: What Kind of Data Does pandas Handle?](https://pandas.pydata.org/docs/getting_started/intro_tutorials/01_table_oriented.html)<br/>[Jurafsky & Martin, Appendix B, §§B.1-B.2: Naive Bayes Classification](https://web.stanford.edu/~jurafsky/slp3/B.pdf) | HW 3 due; HW 4 released |
| 8 | Oct 13 | **No class: Midterm Recess** | | |
|  | Oct 15 | Linear and logistic regression for language data | [Jurafsky & Martin, Ch. 4: Logistic Regression and Text Classification](https://web.stanford.edu/~jurafsky/slp3/4.pdf) | |
| 9 | Oct 20 | Hidden Markov Models and the Viterbi algorithm | [Jurafsky & Martin, Appendix A: Hidden Markov Models](https://web.stanford.edu/~jurafsky/slp3/A.pdf) | |
|  | Oct 22 | Part-of-speech tagging and sequence-labeling error analysis | [Jurafsky & Martin, Ch. 17: Sequence Labeling](https://web.stanford.edu/~jurafsky/slp3/17.pdf) | HW 4 due; HW 5 released |
| 10 | Oct 27 | Named entity recognition and linguistic annotation | [NLTK Book, Ch. 7, §5: Named Entity Recognition](https://www.nltk.org/book/ch07.html) | |
|  | Oct 29 | Context-free grammars and syntactic parsing | [Jurafsky & Martin, Ch. 18: Context-Free Grammars and Constituency Parsing](https://web.stanford.edu/~jurafsky/slp3/18.pdf) | Presentation paper choice |
| 11 | Nov 3 | Vector-space models, TF-IDF, and information retrieval | [Jurafsky & Martin, Ch. 11, §§11.1-11.2: Information Retrieval](https://web.stanford.edu/~jurafsky/slp3/11.pdf) | |
|  | Nov 5 | Topic models, LDA, and discovering patterns in document collections | [scikit-learn: Topic Extraction with NMF and LDA](https://scikit-learn.org/stable/auto_examples/applications/plot_topics_extraction_with_nmf_lda.html) | HW 5 due; HW 6 released |
| 12 | Nov 10 | Neural networks, embeddings, and model training | [Jurafsky & Martin, Ch. 5: Embeddings](https://web.stanford.edu/~jurafsky/slp3/5.pdf)<br/>[Jurafsky & Martin, Ch. 6: Neural Networks](https://web.stanford.edu/~jurafsky/slp3/6.pdf) | |
|  | Nov 12 | What linguistic knowledge do language and speech models learn? | **Choose one:**<br/>[Choi et al. (2026), “\[b\] = \[d\] - \[t\] + \[p\]: Self-supervised Speech Models Discover Phonological Vector Arithmetic”](https://aclanthology.org/2026.findings-acl.537/)<br/>[Yang et al. (2025), “LingGym: How Far Are LLMs from Thinking Like Field Linguists?”](https://aclanthology.org/2025.emnlp-main.69/)<br/>[Warstadt et al. (2020), “BLiMP: The Benchmark of Linguistic Minimal Pairs for English”](https://aclanthology.org/2020.tacl-1.25/)<br/>[Ma & Miyao (2026), “The Imperfective Paradox in Large Language Models”](https://aclanthology.org/2026.acl-long.689/) | |
| 13 | Nov 17 | Working with linguistic corpora: design, query, annotation, metadata, variation, and representativeness | [NLTK Book, Ch. 11, §§1 and 3.5: Managing Linguistic Data](https://www.nltk.org/book/ch11.html) | |
|  | Nov 19 | Automatic speech recognition: speech representations, variation, and recognition errors | [Jurafsky & Martin, Ch. 14: Phonetics and Speech Feature Extraction](https://web.stanford.edu/~jurafsky/slp3/14.pdf)<br/>[Jurafsky & Martin, Ch. 15: Automatic Speech Recognition](https://web.stanford.edu/~jurafsky/slp3/15.pdf) | HW 6 due |
| 14 | Nov 24 | Language variation, bias, and social impacts of NLP | **Choose one:**<br/>[Sap et al. (2019), “The Risk of Racial Bias in Hate Speech Detection”](https://aclanthology.org/P19-1163/)<br/>[Wassink et al. (2022), “Uneven Success: Automatic Speech Recognition and Ethnicity-Related Dialects”](https://www.sciencedirect.com/science/article/abs/pii/S0167639322000486)<br/>[Cheng et al. (2026), “Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence”](https://arxiv.org/abs/2510.01395) | |
|  | Nov 26 | **No class: Thanksgiving Recess** | | |
| 15 | Dec 1 | Student paper presentations | | Slides due for presenters |
|  | Dec 3 | Student paper presentations and course synthesis | | Slides due for presenters |
| Final exam | Dec 15 | **Take-home final exam due** | | Take-home final exam |

<div style="margin-bottom: 4rem;"></div>
