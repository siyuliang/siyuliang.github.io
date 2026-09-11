---
layout: page
permalink: /teaching/ling322/spring27/
# title: Speech Technology Syllabus
# description: Spring 2027
nav: false
navbar_title: LING 322 Spring 2027
hide_navbar_links: true
hide_footer: true
---

# LING 322: Speech Technology

[Information](#information) · [Coursework](#coursework) · [Policies](#policies) · [Schedule](#schedule)

## Information {#information}

### Course description

How do computers turn speech into text, recognize who is speaking, or generate a human-sounding voice? Why do these systems work well for some speakers and languages but poorly for others? This course introduces the technical knowledge to understand the current practice in speech technology and the relavant linguistic concepts behind it.

We begin with the study of speech as a physical and linguistic signal, and then examine how speech is represented computationally and how modern systems perform tasks such as automatic speech recognition, speaker and language recognition, speech synthesis, and speech-to-speech interaction. We also discuss multilingual and low-resource speech technology, speech data and consent, evaluation, and bias.

The course is open to students with little or no programming background. Supplementary materials in programming and linguistics are provided to help students from a range of backgrounds build the skills they need to participate fully. We will use structured coding notebooks to explore speech data and models. The emphasis is on understanding what a system does, designing informative experiments, interpreting outputs, and connecting computational behavior to concepts from linguistics such as phonetics, phonology, sociolinguistics, and language variation.

### Learning outcomes

By the end of the course, you will be able to:

- Explain how speech is represented as a waveform, spectrogram, and sequence of acoustic features.
- Identify and interpret basic acoustic properties including duration, intensity, fundamental frequency, formants, and spectral structure.
- Use Praat and Python notebooks to inspect, visualize, and manipulate speech recordings.
- Explain at a conceptual level how major speech technologies work, including automatic speech recognition, forced alignment, speaker and language recognition, speech synthesis, and modern speech foundation models.
- Run pretrained speech models and use their outputs to investigate linguistic questions.
- Evaluate automatic speech recognition using word error rate and systematic linguistic error analysis.
- Design simple experiments testing how factors such as accent, speaking rate, noise, language, and recording conditions affect speech systems.
- Read a speech corpus critically: how it was collected, who is in it, and what was annotated.
- Critically assess variation, bias, privacy, accessibility, and resource inequality in speech technology.
- Communicate the results of a small empirical speech-technology study to technical and nontechnical audiences.

### Prerequisites

No prerequisites. ANTH 200/LING 200 or LING 430 is helpful but not required. 

### Meeting times and format

This course is taught **in person**. Class meetings will combine short lectures, demonstrations, activities, and discussion. Please bring a laptop to every class.

| Days | Time | Location |
|---|---|---|
| Monday & Wednesday | 2:00-3:15 PM | Herring 125 |

### Instructor

| Name | Email | Office | Office hours |
|---|---|---|---|
| [Siyu Liang](https://siyuliang.github.io/) | siyu.liang@rice.edu | Herring 205 | TBD |

### Texts and readings

There is no required textbook. All required readings are available at no cost through open-access sources or Canvas. The main texts are:

- **Jurafsky & Martin.** [*Speech and Language Processing* (3rd ed. draft)](https://web.stanford.edu/~jurafsky/slp3/) 
- **Hugging Face.** [*Audio Course*](https://huggingface.co/learn/audio-course/chapter0/introduction)
- **Styler.** [*Using Praat for Linguistic Research*](https://wstyler.ucsd.edu/praat/)
- **Chodroff.** [*Corpus Phonetics Tutorial*](https://eleanorchodroff.com/tutorial/index.html)

Many research papers in speech technology contain equations or implementation details beyond what is expected for this course. Unless otherwise indicated, read for the research question, central idea, experimental design, major findings, and linguistic implications rather than every technical detail in a research paper. 

### Additional materials

You may find the following materials useful for background knowledge or additional information not covered in the class. 

**Phonetics**

- [Crash Course Linguistics](https://www.youtube.com/playlist?list=PL8dPuuaLjXtP5mp25nStsuDzk2blncJDW) (#8 Consonants, #9 Vowels, #10 Phonology)
- [Seeing Speech](https://www.seeingspeech.ac.uk/) (MRI and ultrasound video for each IPA symbol)
- [Interactive IPA chart](https://www.ipachart.com/)

**Praat**

- [Gouskova, "Praat tutorial"](https://www.gouskova.com/2016/09/03/praat-tutorial/)
- [Praat Tutorials for Speech & Voice Analysis](https://www.youtube.com/playlist?list=PLFTeQGMB_DRu0m_CDDfwERHd8-d7W8vCy)
- [Russell, "Using Praat to find vowel formants"](https://home.cc.umanitoba.ca/~krussll/phonetics/practice/praat.html)

**Coding**

- [Kaggle Python Course](https://www.kaggle.com/learn/python)

**Speech technology**

- [Hugging Face *Audio Course*](https://huggingface.co/learn/audio-course/chapter1/introduction)
- [Simon King, Edinburgh *Speech Processing*](https://speech.zone/courses/speech-processing/)

### Acknowledgments

This course was influenced by several excellent courses and open resources during its development, with gratitude: [CS 224S *Spoken Language Processing*](https://web.stanford.edu/class/cs224s/) (Stanford, Andrew Maas and Tolúlọpẹ́ Ogunremi), [*Speech Processing*](https://speech.zone/courses/speech-processing/) (Edinburgh, Simon King), [11-751/18-781 *Speech Recognition and Understanding*](https://www.wavlab.org/activities/2025/11751-2025f/) (CMU, Shinji Watanabe), and the [Hugging Face Audio Course](https://huggingface.co/learn/audio-course/chapter0/introduction).

---

## Coursework {#coursework}

### Assignments

There will be six assignments in the class. Most computational work will be completed in notebooks containing starter code, explanations, and partially completed examples. You will modify small pieces of code, inspect outputs, make plots, and write short interpretations. The goal is not to become an expert programmer but to become comfortable with the applicable knowledge to write code to investigate speech.

<!-- - **HW 1: Seeing and measuring speech.** Record and inspect speech in Praat; identify waveforms, spectrograms, periodicity, intensity, and acoustic landmarks; then measure duration, F0, and vowel formants, compare two speakers, and explain what the measurements capture and what they miss.
- **HW 2: Speech in a notebook.** Open, plot, and manipulate recordings in a provided Colab notebook. Test how changes in rate, pitch, filtering, and added noise affect intelligibility and acoustic structure, and relate what you hear to what the spectrogram shows.
- **HW 3: Testing automatic speech recognition.** Run a pretrained ASR model on a controlled set of recordings, calculate word error rate using provided code, and conduct a linguistic error analysis.
- **HW 4: Variation and robustness.** Design a small experiment examining one source of variation — accent, speaking rate, background noise, code-switching, or microphone conditions — and evaluate its effect on ASR.
- **HW 5: Speaker and language recognition.** Explore a pretrained model for speaker recognition, diarization, or language identification and explain what can and cannot be inferred from its behavior.
- **HW 6: Synthetic voices.** Generate speech with a text-to-speech system, run a small listening comparison, and analyze where synthesis succeeds, where it fails, and what its failures reveal about the model's representation of phonetics and prosody. -->

Homework is graded primarily on completion, interpretation, and evidence of genuine engagement rather than technical correctness. A thoughtful explanation of an unexpected or imperfect result is more valuable than unexplained output. Detailed specifications will be provided on Canvas. The lowest grade from the assignments will be dropped. All homework is due at 11:59 PM on the listed date.

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

| Milestone | Date |
|---|---|
| Proposal | Mar 29 |
| Work-in-progress lightning talk and draft figures | Apr 14 |
| Final presentation | Apr 19 or Apr 21 |
| Written report or computational notebook | May 4 |

Projects are evaluated on the quality of the question, experimental design, analysis, interpretation, and communication rather than on model performance or programming sophistication.

### Grading

| Component | Weight |
|---|---:|
| Homework (best 5 of 6) | 50% |
| Final project | 40% |
| Participation and in-class activities | 10% |

Letter grades will be assigned using the following scale. 

| Grade | Percentage | Grade | Percentage | Grade | Percentage |
|---|---:|---|---:|---|---:|
| A+ | 97-100 | A | 90-96.99 | | |
| B+ | 87-89.99 | B | 83-86.99 | B- | 80-82.99 |
| C+ | 77-79.99 | C | 73-76.99 | C- | 70-72.99 |
| D+ | 67-69.99 | D | 63-66.99 | D- | 60-62.99 |
| F | Below 60 | | | | |

---

## Policies {#policies}

### Participation and keeping up

This course combines concepts from linguistics with unfamiliar computational tools. You are expected to participate actively in code walkthroughs and to ask questions when something is unclear. Computational activities build cumulatively, so if you miss a class, review the posted notebook and materials before the next class.

### Collaboration

Discussion and collaborative problem solving are encouraged. You may talk through concepts, compare interpretations, and help classmates diagnose technical problems. Unless an assignment says otherwise, submitted analyses and written responses should be your own, and you should be able to explain the code and results in your submission. List collaborators and cite external code, data, or ideas where appropriate.

### Recording and using other people's voices

Several assignments involve recording speech. A voice is identifying information. Unless an assignment says otherwise, record only yourself, or record another person only with their informed spoken consent captured at the start of the recording. Do not upload recordings of other people to external services, do not submit recordings made without the speaker's knowledge, and do not use a classmate's voice to test voice-cloning or speaker-verification tools. If your final project involves recording people, discuss the plan with the instructor first.

### Late work and extensions

If unexpected circumstances make it difficult to complete work on time, email the instructor as soon as possible so that we can agree on a reasonable timeline. Without an approved extension or a different policy stated in the assignment, late homework loses 10% of the earned score for each 24-hour period or part thereof, up to 48 hours.

### Use of large language models

AI assistants may be useful for explaining unfamiliar code, interpreting error messages, or reviewing concepts, but they should not substitute for understanding the experiment you are conducting. Unless an assignment explicitly permits broader use, an AI assistant may be used as a tutor but should not generate substantial portions of submitted analysis. Any permitted use should be disclosed. You must be able to explain your workflow and the meaning of the results you submit.

To make these expectations concrete, this course uses the **AI Usage Scale** ([Parsons et al. 2024](https://siyuliang.github.io/ling430fall26/readings/parsons-et-al-2024.pdf)) as the shared vocabulary for describing AI assistance. For the written portions of your work: Levels 0–2 (grammar and sentence-level polish) are always acceptable; Levels 3–5 (brainstorming, feedback on drafts, paraphrasing for your own understanding) are acceptable with disclosure; Levels 6–8 (structural assistance and substantial generation) are not permitted unless an assignment explicitly says otherwise. For code, apply the same scale: having AI explain a concept or an error message sits in the acceptable range, while having it produce the analysis you submit does not. When you disclose AI use, name the level.

### Communication

- Use the relevant Canvas discussion board for technical and logistical questions so that everyone can benefit from the answer.
- Use email for grades, accommodations, or other private matters.
- On weekdays, the instructor will normally respond to email within 24 hours; responses may take longer on weekends or university holidays.

### Academic integrity

All work in this course is governed by the [Rice Honor System](https://honor.rice.edu/). Academic misconduct includes presenting another person's work as your own, falsifying data or results, using unauthorized assistance, or violating an assignment's collaboration rules. When in doubt about collaboration, reuse of code, citation, or AI assistance, ask before submitting the work.

### Accessibility and accommodations

If a documented disability or other condition may affect your academic work, first contact Rice's [Student Disability Resource Center](https://drc.rice.edu/) to determine appropriate accommodations, and then meet with the instructor to discuss how they will be implemented in this course. Please do this as early as possible. You are also encouraged to tell the instructor about temporary conditions or other access barriers; if there is something reasonable I can do to make the course more accessible, please let me know.

Several activities involve listening; each has a visual equivalent. Please tell the instructor early if listening tasks are difficult for you.

### Title IX, support, and mandatory reporting

Rice prohibits harassment, sexual harassment, sexual assault, dating violence, and stalking. Under Rice policy, university employees, including the instructor, are Mandatory Reporters and must promptly share information they receive about such conduct involving a Rice student or employee with a Title IX Coordinator. Students seeking support or information about reporting and supportive measures can contact [The SAFE Office](https://safe.rice.edu/) or review [Rice's reporting options](https://safe.rice.edu/options-reporting). For an emergency, call 911 or the appropriate campus emergency service.

### Religious observances

Please notify the instructor as early as possible if a religious observance conflicts with a class meeting, assignment, presentation, or project deadline so that a reasonable accommodation can be arranged.

---

## Schedule {#schedule}

### Class schedule

The schedule is a working plan and may change in response to class progress. Readings are to be completed **before** the associated meeting. Unless otherwise stated, assignments are due at 11:59 PM on the listed date.

| Week | Date | Topic | Reading | Activity | Due |
|---:|---|---|---|---|---|
|  | | **I. Speech signals and phonetics** | | | |
| 1 | Jan 11 | What is speech technology? Speech production, the source–filter model, phonetic transcription, and the spectrogram | | | |
|  | Jan 13 | Acoustic phonetics: fundamental frequency, intensity, duration, formants and the vowel space, and prosody | [Jurafsky & Martin, Ch. 15, §§15.1–15.4](https://web.stanford.edu/~jurafsky/slp3/15.pdf)<br/>[Gouskova, "Praat tutorial"](https://www.gouskova.com/2016/09/03/praat-tutorial/) | Praat lab | HW 1 released |
| 2 | Jan 18 | **No class: Martin Luther King, Jr. Day** | | | |
|  | Jan 20 | Python and Colab for speech: notebooks, variables, lists, loops, and functions | [Welcome to Colab](https://colab.research.google.com/notebooks/intro.ipynb)<br/>[Hugging Face Audio Course, Unit 1: Load and explore an audio dataset](https://huggingface.co/learn/audio-course/chapter1/load_and_explore) | Notebook lab: load and plot a recording | Practice 0 released (optional, ungraded) |
| 3 | Jan 25 | From continuous sound to digital audio: sampling, quantization, and windowing | [Jurafsky & Martin, Ch. 15, §§15.5.1–15.5.2](https://web.stanford.edu/~jurafsky/slp3/15.pdf)<br/>[Hugging Face Audio Course, Unit 1: Introduction to audio data](https://huggingface.co/learn/audio-course/chapter1/audio_data) | | |
|  | Jan 27 | Representing speech for machines: spectrograms, mel filterbanks, and MFCCs | [Jurafsky & Martin, Ch. 15, §§15.5.3–15.6](https://web.stanford.edu/~jurafsky/slp3/15.pdf)<br/>[Hugging Face Audio Course, Unit 1: Preprocessing an audio dataset](https://huggingface.co/learn/audio-course/chapter1/preprocessing)<br/>Optional: [Edinburgh *Speech Processing*, Modules 3 and 8: Digital Speech Signals; Feature Engineering](https://speech.zone/courses/speech-processing/) | Notebook lab: build a spectrogram | |
| 4 | Feb 1 | What information does the signal carry? Manipulation and perception | | Notebook lab: filtering, pitch, rate, and noise | HW 1 due; HW 2 released |
|  | Feb 3 | Forced alignment and corpus phonetics | [Chodroff, *Corpus Phonetics Tutorial*, §1 Introduction](https://eleanorchodroff.com/tutorial/index.html) and [§3 Montreal Forced Aligner](https://eleanorchodroff.com/tutorial/montreal-forced-aligner.html) (read for the workflow, not the install steps) | Alignment demo | |
|  | | **II. Automatic speech recognition** | | | |
| 5 | Feb 8 | The ASR task and its history: template matching, HMMs, and neural networks | [Jurafsky & Martin, Ch. 16, §16.1: The Automatic Speech Recognition Task](https://web.stanford.edu/~jurafsky/slp3/16.pdf)<br/>Optional: [Jurafsky & Martin, Appendix A, §§A.1–A.4: Hidden Markov Models](https://web.stanford.edu/~jurafsky/slp3/A.pdf) | | |
|  | Feb 10 | End-to-end ASR: encoder–decoder models, CTC, and Whisper | [Jurafsky & Martin, Ch. 16, §§16.3 and 16.5](https://web.stanford.edu/~jurafsky/slp3/16.pdf)<br/>[Hugging Face Audio Course, Unit 3: CTC architectures](https://huggingface.co/learn/audio-course/chapter3/ctc) and [Seq2Seq architectures](https://huggingface.co/learn/audio-course/chapter3/seq2seq) | Model demonstration lab | |
| 6 | Feb 15 | Learning from unlabeled speech: self-supervised models (wav2vec 2.0, HuBERT) | [Jurafsky & Martin, Ch. 16, §16.4: Self-supervised models — HuBERT](https://web.stanford.edu/~jurafsky/slp3/16.pdf)<br/>**Choose one** (abstract and introduction only):<br/>[Baevski et al. (2020), "wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations"](https://arxiv.org/abs/2006.11477)<br/>[Hsu et al. (2021), "HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units"](https://arxiv.org/abs/2106.07447) | | HW 2 due |
|  | Feb 17 | Evaluating transcription: word error rate and its limitations | [Jurafsky & Martin, Ch. 16, §16.6: ASR Evaluation — Word Error Rate](https://web.stanford.edu/~jurafsky/slp3/16.pdf)<br/>[Hugging Face Audio Course, Unit 5: Evaluation metrics for ASR](https://huggingface.co/learn/audio-course/chapter5/evaluation) | ASR evaluation lab | HW 3 released |
| 7 | Feb 22 | Why does ASR make mistakes? Pronunciation variation, disfluency, ambiguity, and context | [Radford et al. (2022), "Robust Speech Recognition via Large-Scale Weak Supervision" (Whisper), §§1, 3.2–3.3, and 3.9](https://arxiv.org/abs/2212.04356)<br/>[Hugging Face Audio Course, Unit 5: Pre-trained models for automatic speech recognition](https://huggingface.co/learn/audio-course/chapter5/asr_models) | | |
|  | Feb 24 | Analyzing ASR errors | | Error-analysis lab | |
| 8 | Mar 1 | Accent, dialect, and sociolinguistic variation in ASR | [Koenecke et al. (2020), "Racial disparities in automated speech recognition"](https://www.pnas.org/doi/10.1073/pnas.1915768117)<br/>Optional: [Wassink et al. (2022), "Uneven Success: Automatic Speech Recognition and Ethnicity-Related Dialects"](https://www.sciencedirect.com/science/article/abs/pii/S0167639322000486) | | HW 3 due; HW 4 released |
|  | Mar 3 | Speech data: corpora, collection, annotation, consent, and privacy | [Ardila et al. (2020), "Common Voice: A Massively-Multilingual Speech Corpus"](https://arxiv.org/abs/1912.06670)<br/>Browse: [Common Voice](https://commonvoice.mozilla.org/) and [the Speech Accent Archive](https://accent.gmu.edu/) | Corpus critique | |
| 9 | Mar 8 | Noise, microphones, speaking rate, and robustness | | Experiment-design lab | |
|  | Mar 10 | Multilingual ASR, code-switching, and cross-lingual transfer | [Pratap et al. (2023), "Scaling Speech Technology to 1,000+ Languages" (MMS)](https://arxiv.org/abs/2305.13516) | | |
| 10 | Mar 15 | **No class: Spring Break** | | | |
|  | Mar 17 | **No class: Spring Break** | | | |
| 11 | Mar 22 | Low-resource and endangered-language speech technology | [Prud'hommeaux et al. (2021), "Automatic speech recognition for supporting endangered language documentation"](https://scholarspace.manoa.hawaii.edu/items/48fdc572-e27a-4452-bc66-9f04c3f3b70d)<br/>Optional: [Liu et al. (2022), "Enhancing Documentation of Hupa with Automatic Speech Recognition"](https://aclanthology.org/2022.computel-1.23/) | | |
|  | Mar 24 | What do speech models learn about phonetics and phonology? | **Choose one:**<br/>[Pasad et al. (2021), "Layer-wise Analysis of a Self-supervised Speech Representation Model"](https://arxiv.org/abs/2107.04734)<br/>[Choi et al. (2026), "\[b\] = \[d\] − \[t\] + \[p\]: Self-supervised Speech Models Discover Phonological Vector Arithmetic"](https://aclanthology.org/2026.findings-acl.537/) | Probing demo | HW 4 due; HW 5 released |
|  | | **III. Speaker recognition, speech synthesis, and spoken dialogue** | | | |
| 12 | Mar 29 | Speaker recognition, diarization, and language identification | [Jurafsky & Martin, Ch. 17, §17.5: Other speech tasks](https://web.stanford.edu/~jurafsky/slp3/17.pdf)<br/>Optional: [Yang et al. (2021), "SUPERB: Speech processing Universal PERformance Benchmark"](https://arxiv.org/abs/2105.01051) | Pretrained-model exploration lab | Project proposal due |
|  | Mar 31 | Text-to-speech I: neural audio codecs and discrete audio tokens | [Jurafsky & Martin, Ch. 17, §§17.1–17.2](https://web.stanford.edu/~jurafsky/slp3/17.pdf)<br/>[Hugging Face Audio Course, Unit 2: Audio generation with a pipeline](https://huggingface.co/learn/audio-course/chapter2/tts_pipeline) | Speech-synthesis lab | |
| 13 | Apr 5 | Text-to-speech II: voice cloning, evaluation, deepfakes, and consent | [Jurafsky & Martin, Ch. 17, §§17.3–17.4: VALL-E and TTS Evaluation](https://web.stanford.edu/~jurafsky/slp3/17.pdf)<br/>[Hugging Face Audio Course, Unit 6: Evaluating text-to-speech models](https://huggingface.co/learn/audio-course/chapter6/evaluation)<br/>Optional: [Wang et al. (2023), "Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers" (VALL-E)](https://arxiv.org/abs/2301.02111) | Listening test | HW 5 due; HW 6 released |
|  | Apr 7 | Spoken language models, voice agents, and speech-to-speech interaction | [Défossez et al. (2024), "Moshi: a speech-text foundation model for real-time dialogue", §§1–2](https://arxiv.org/abs/2410.00037)<br/>[Hugging Face Audio Course, Unit 7: Speech-to-speech translation](https://huggingface.co/learn/audio-course/chapter7/speech-to-speech) | | |
|  | | **IV. Bias and fairness** | | | |
| 14 | Apr 12 | Bias, fairness, and unequal performance in speech technology | [Markl (2022), "Language Variation and Algorithmic Bias: Understanding Algorithmic Bias in British English Automatic Speech Recognition"](https://facctconference.org/static/pdfs_2022/facct22-3533117.pdf) | | |
|  | | **V. Final projects** | | | |
|  | Apr 14 | Final-project workshop: analyzing results and telling a convincing story | | Lightning talks; in-class project work | HW 6 due; draft figures/results |
| 15 | Apr 19 | Final project presentations I | | Project presentations | Slides due for presenters |
|  | Apr 21 | Final project presentations II and course synthesis | | Project presentations | Slides due for presenters |
| Finals week | May 4 | **Final project submission** | | | Final project due |

<div style="margin-bottom: 4rem;"></div>
