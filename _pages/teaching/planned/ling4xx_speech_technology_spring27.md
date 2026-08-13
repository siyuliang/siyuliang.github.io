---
layout: page
permalink: /teaching/speechtech/spring27/
# title: Speech Technology Syllabus
# description: Spring 2027
nav: false
navbar_title: Speech Technology Spring 2027
hide_navbar_links: true
hide_footer: true
---

# LING 4XX: Speech Technology

[Information](#information) · [Coursework](#coursework) · [Policies](#policies) · [Schedule](#schedule)

## Information {#information}

### Course description

How do computers turn speech into text, recognize who is speaking, or generate a human-sounding voice? Why do these systems work well for some speakers and languages but poorly for others? This course introduces the foundations and current practice of speech technology from a linguistic perspective.

We will begin with speech as a physical and linguistic signal: waveforms, spectrograms, pitch, formants, and the acoustic cues that distinguish speech sounds. We will then examine how speech is represented computationally and how modern systems perform tasks such as automatic speech recognition, speaker and language recognition, speech synthesis, and speech-to-speech interaction. We will also discuss multilingual and low-resource speech technology, evaluation, and bias. 

The course is designed for students with little or no programming background. We will use structured notebooks to explore speech data and models. The emphasis is on understanding what a system does, designing informative experiments, interpreting outputs, and connecting computational behavior to concepts from linguistics such as phonetics, phonology, sociolinguistics, and language variation.

### Learning outcomes

By the end of the course, you will be able to:

- Explain how speech is represented as a waveform, spectrogram, and sequence of acoustic features.
- Identify and interpret basic acoustic properties including duration, intensity, fundamental frequency, formants, and spectral structure.
- Use Praat and beginner-friendly Python notebooks to inspect, visualize, and manipulate speech recordings.
- Explain at a conceptual level how major speech technologies work, including automatic speech recognition, speaker and language recognition, speech synthesis, and modern speech foundation models.
- Run pretrained speech models and use their outputs to investigate linguistic questions.
- Evaluate automatic speech recognition using word error rate and systematic linguistic error analysis.
- Design simple experiments testing how factors such as accent, speaking rate, noise, language, and recording conditions affect speech systems.
- Critically assess variation, bias, privacy, accessibility, and resource inequality in speech technology.
- Communicate the results of a small empirical speech-technology study to technical and nontechnical audiences.

### Prerequisites

No prerequisites. ANTH 200/LING 200 or LING 430 is helpful but not required. No prior coursework in programming or computer science is required.

### Meeting times and format

This course is taught **in person**. Class meetings will combine short lectures, demonstrations, listening and analysis activities, discussion, and guided computational labs. Please bring a laptop to every class.

| Days | Time | Location |
|---|---|---|
| TBD | TBD | TBD |

### Instructor

| Name | Email | Office | Office hours |
|---|---|---|---|
| [Siyu Liang](https://siyuliang.github.io/) | siyu.liang@rice.edu | Herring 205 | TBD |

### Texts and readings

There is no required textbook. All required readings will be available at no cost through open-access sources or Canvas. We will draw selectively from:

- **Jurafsky & Martin.** [*Speech and Language Processing* (3rd ed. draft)](https://web.stanford.edu/~jurafsky/slp3/)

Many research papers in speech technology contain equations or implementation details beyond what is expected in this course. Unless otherwise indicated, read for the research question, central idea, experimental design, major findings, and linguistic implications rather than for every technical detail.

---

## Coursework {#coursework}

### Assignments

There will be six scaffolded assignments. Most computational work will be completed in notebooks containing starter code, explanations, and partially completed examples. Students will modify small pieces of code, inspect outputs, make plots, and write short interpretations. The goal is not to become an expert programmer but to become comfortable using computational tools to investigate speech.

- **HW 1: Seeing speech.** Record and inspect speech in Praat; identify waveforms, spectrograms, periodicity, intensity, and basic acoustic landmarks.
- **HW 2: Measuring speech.** Measure duration, F0, and vowel formants; compare tokens or speakers and explain what the measurements capture and what they miss.
- **HW 3: What makes speech recognizable?** Manipulate or compare speech signals in a provided notebook and test how changes in rate, pitch, filtering, or noise affect intelligibility and acoustic structure.
- **HW 4: Testing automatic speech recognition.** Run a pretrained ASR model on a controlled set of recordings, calculate word error rate using provided code, and conduct linguistic error analysis.
- **HW 5: Variation and robustness.** Design a small experiment examining one source of variation, such as accent, speaking rate, background noise, code-switching, or microphone conditions, and evaluate its effect on ASR.
- **HW 6: Beyond transcription.** Explore a pretrained model for speaker recognition, language identification, speech synthesis, or speech interaction and explain what can and cannot be inferred from its behavior.

Homework is graded primarily on completion, interpretation, and evidence of genuine engagement rather than technical correctness. A thoughtful explanation of an unexpected or imperfect result is more valuable than unexplained output. Detailed specifications will be provided on Canvas. The lowest grade from the assignments will be dropped. 

### Final project

The final project is a small empirical study using speech data or an existing speech model. Students may work individually or in pairs. Projects should pose a focused question, make a prediction, analyze a manageable dataset or set of recordings, and interpret the results.

<!-- Possible questions include:

- How does speaking rate affect ASR accuracy?
- What kinds of errors does ASR make on regional or social varieties of English?
- How does background noise affect different speech sounds or speakers?
- What happens when speakers code-switch?
- How well does a multilingual model recognize a lower-resource language?
- What acoustic information appears to be represented by a pretrained speech model?
- How do two speech-synthesis systems differ in prosody or pronunciation? -->

The project will include a short proposal, an in-class work-in-progress discussion, a final presentation, and a concise written report or computational notebook. Projects are evaluated on the quality of the question, experimental design, analysis, interpretation, and communication rather than on model performance or programming sophistication.

### Grading

| Component | Weight |
|---|---:|
| Guided homework portfolio | 50% |
| Final project | 45% |
| Participation and in-class activities | 5% |

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

This course combines concepts from linguistics with unfamiliar computational tools. You are not expected to arrive knowing how to program, but you are expected to participate actively in code walkthroughs and to ask questions when something is unclear. Computational activities build cumulatively, so if you miss a class, review the posted notebook and materials before the next class.

### Collaboration

Discussion and collaborative problem solving are encouraged. You may talk through concepts, compare interpretations, and help classmates diagnose technical problems. Unless an assignment says otherwise, submitted analyses and written responses should be your own, and you should be able to explain the code and results in your submission. List collaborators and cite external code, data, or ideas where appropriate.

### Late work and extensions

If unexpected circumstances make it difficult to complete work on time, email the instructor as soon as possible so that we can agree on a reasonable timeline. Without an approved extension or a different policy stated in the assignment, late homework loses 10% of the earned score for each 24-hour period or part thereof, up to 48 hours.

### Use of large language models

AI assistants may be useful for explaining unfamiliar code, interpreting error messages, or reviewing concepts, but they should not substitute for understanding the experiment you are conducting. Unless an assignment explicitly permits broader use, an AI assistant may be used as a tutor but should not generate substantial portions of submitted analysis. Any permitted use should be disclosed. You must be able to explain your workflow and the meaning of your results you submit.

### Communication

- Use the relevant Canvas discussion board for technical and logistical questions so that everyone can benefit from the answer.
- Use email for grades, accommodations, or other private matters.
- On weekdays, the instructor will normally respond to email within 24 hours; responses may take longer on weekends or university holidays.

### Academic integrity

All work in this course is governed by the [Rice Honor System](https://honor.rice.edu/). Academic misconduct includes presenting another person's work as your own, falsifying data or results, using unauthorized assistance, or violating an assignment's collaboration rules. When in doubt about collaboration, reuse of code, citation, or AI assistance, ask before submitting the work.

### Accessibility and accommodations

If a documented disability or other condition may affect your academic work, first contact Rice's [Student Disability Resource Center](https://drc.rice.edu/) to determine appropriate accommodations, and then meet with the instructor to discuss how they will be implemented in this course. Please do this as early as possible. You are also encouraged to tell the instructor about temporary conditions or other access barriers; if there is something reasonable I can do to make the course more accessible, please let me know.

### Title IX, support, and mandatory reporting

Rice prohibits harassment, sexual harassment, sexual assault, dating violence, and stalking. Under Rice policy, university employees, including the instructor, are Mandatory Reporters and must promptly share information they receive about such conduct involving a Rice student or employee with a Title IX Coordinator. Students seeking support or information about reporting and supportive measures can contact [The SAFE Office](https://safe.rice.edu/) or review [Rice's reporting options](https://safe.rice.edu/options-reporting). For an emergency, call 911 or the appropriate campus emergency service.

### Religious observances

Please notify the instructor as early as possible if a religious observance conflicts with a class meeting, assignment, presentation, or project deadline so that a reasonable accommodation can be arranged.

---

## Schedule {#schedule}

### Class schedule

The schedule is a working plan and may change in response to class progress. Readings are to be completed **before** the associated meeting. 

| Week | Date | Topic | Reading | Activity | Due |
|---:|---|---|---|---|---|
| 1 | Jan 12 | What is speech technology? | | | |
|  | Jan 14 | Speech as a signal: sound, waveforms, frequency, amplitude, and time | Introductory acoustic phonetics reading TBD | | HW 1 released |
| 2 | Jan 19 | Seeing speech: waveforms and spectrograms | | Praat tutorial | |
|  | Jan 21 | Speech production and acoustic cues: vowels and consonants | Selected phonetics reading TBD | | |
| 3 | Jan 26 | Pitch, intensity, duration, and prosody | | Guided Praat lab | HW 1 due; HW 2 released |
|  | Jan 28 | From continuous sound to digital audio: sampling and representations | Jurafsky & Martin, selected sections from Ch. 14, “Phonetics and Speech Feature Extraction” | | |
| 4 | Feb 2 | Measuring vowels: formants and vowel spaces | | Measurement lab | |
|  | Feb 4 | Representing speech for machines: spectrograms, filterbanks, and MFCC | Jurafsky & Martin, selected sections from Ch. 14, “Phonetics and Speech Feature Extraction” | | HW 2 due; HW 3 released |
| 5 | Feb 9 | What information does a speech signal contain? Manipulation and perception | | Notebook lab: filtering, pitch, rate, and noise | |
|  | Feb 11 | **No class: Spring Recess** | | | |
| 6 | Feb 16 | Intro to ASR | Jurafsky & Martin, selected sections from Ch. 15, “Automatic Speech Recognition” | | |
|  | Feb 18 | Evolution of ASR: templates, HMMs, neural networks, and end-to-end ASR | | | HW 3 due; HW 4 released |
| 7 | Feb 23 | Modern ASR: CTC, encoder-decoder models, and Whisper | | Model demonstration lab | |
|  | Feb 25 | Evaluating transcription | | ASR evaluation lab | |
| 8 | Mar 2 | Why does ASR make mistakes? Pronunciation, ambiguity, disfluency, and context | | Error-analysis lab | HW 4 due; HW 5 released |
|  | Mar 4 | Accent, dialect, and sociolinguistic variation in ASR | Selected sociolinguistic ASR reading TBD | | |
| 9 | Mar 9 | Noise, microphones, speaking rate, and robustness | | Experiment-design lab | |
|  | Mar 11 | Multilingual ASR, code-switching, and cross-lingual transfer | Selected multilingual ASR paper TBD | | |
| 10 | Mar 16 | **No class: Spring Break** | | | |
|  | Mar 18 | **No class: Spring Break** | | | |
| 11 | Mar 23 | How machines learn from unlabeled speech: wav2vec 2.0, HuBERT, MMS, and self-supervised learning | Self-supervised model paper TBD | | HW 5 due; HW 6 released |
|  | Mar 25 | Low-resource and endangered-language speech technology | Endangered language technology reading TBD | | |
| 12 | Mar 30 | What do speech models learn about phonetics and phonology? | Selected probing paper TBD | | |
|  | Apr 1 | Speaker recognition and language identification | | Pretrained-model exploration lab | |
| 13 | Apr 6 | Text-to-speech and voice generation | | Speech-synthesis lab | HW 6 due; project proposal due |
|  | Apr 8 | Speech-to-speech systems, spoken dialogue, and emerging speech-language models | Selected contemporary reading | | |
| 14 | Apr 13 | Bias, fairness, and unequal performance in speech technology | Selected fairness reading TBD | | |
|  | Apr 15 | Final-project workshop: analyzing results and telling a convincing story | | In-class project work | Draft figures/results |
| 15 | Apr 20 | Course synthesis | |  | |
|  | Apr 22 |  Final project presentations | | Project presentations | Final presentations |
| Finals week | May 4 | **Final project submission** | | | Final project due |

<div style="margin-bottom: 4rem;"></div>
