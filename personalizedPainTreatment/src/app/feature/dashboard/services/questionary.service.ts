import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionaryService {

  constructor() { }
  questions: any[] = [
    {
      patientData_Id: NaN,
      question_Id: 1,
      questions: 'Pain Intensity',
      subQuestionId:1,
      subQuestions:'HOW WOULD YOU RATE YOUR PAIN ON AVERAGE',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 2,
      questions: 'AGE IN YERAS',
      subQuestionId:2,
      subQuestions:'AGE IN YERAS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 3,
      questions: 'Pain Experience',
      subQuestionId:3,
      subQuestions:'HOW LONG HAVE YOU HAD YOUR PAIN PROBLEM',
      p_Options: '',
      text1: '',
      text2: ''
    },
    
    {
      patientData_Id: NaN,
      question_Id: 4,
      questions: 'Promis Anxiety',
      subQuestionId:4.1,
      subQuestions:'I FELT FAERFULL',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 4,
      questions: 'Promis Anxiety',
      subQuestionId:4.2,
      subQuestions:'I FOUND IT HARD TO FOCUS ON ANYTHING OTHER THAN MY ANXIETY',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 4,
      questions: 'Promis Anxiety',
      subQuestionId:4.3,
      subQuestions:'MY WORRIES OVERWHELMED ME',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 4,
      questions: 'Promis Anxiety',
      subQuestionId:4.4,
      subQuestions:'I FELT UNEASY',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 5,
      questions: 'Depression',
      subQuestionId:5.1,
      subQuestions:'I FELT WORTHLESS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 5,
      questions: 'Depression',
      subQuestionId:5.2,
      subQuestions:'I FELT HELPLESS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 5,
      questions: 'Depression',
      subQuestionId:5.3,
      subQuestions:'I FELT DEPRESSED',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 5,
      questions: 'Depression',
      subQuestionId:5.4,
      subQuestions:'I FELT HOPELESS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 6,
      questions: 'Physical Function',
      subQuestionId:6.1,
      subQuestions:'ARE YOU ABLE TO DO CHORES SUCH AS VACUUMING OR WORK',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 6,
      questions: 'Physical Function',
      subQuestionId:6.2,
      subQuestions:'ARE YOU ABLE TO GO UP AND DOWN STAIRS AT A NORMAL PACE',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 6,
      questions: 'Physical Function',
      subQuestionId:6.3,
      subQuestions:'ARE YOU ABLE TO GO FOR A WALK OF AT LEAST 15 MINUTES',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 6,
      questions: 'Physical Function',
      subQuestionId:6.4,
      subQuestions:'ARE YOU ABLE TO RUN ERRANDS AND SHOP',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 7,
      questions: 'Pain Behavior',
      subQuestionId:7.1,
      subQuestions:'WHEN I WAS IN PAIN I BECAME IRRITABLE',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 7,
      questions: 'Pain Behavior',
      subQuestionId:7.2,
      subQuestions:'WHEN I WAS IN PAIN I GRIMACED',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 7,
      questions: 'Pain Behavior',
      subQuestionId:7.3,
      subQuestions:'WHEN I WAS IN PAIN I MOVED EXTREMELY SLOWLY',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 7,
      questions: 'Pain Behavior',
      subQuestionId:7.4,
      subQuestions:'WHEN I WAS IN PAIN I MOVED STIFFLY',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 7,
      questions: 'Pain Behavior',
      subQuestionId:7.5,
      subQuestions:'WHEN I WAS IN PAIN I CALLED OUT FOR SOMEONE TO HELP ME',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 7,
      questions: 'Pain Behavior',
      subQuestionId:7.6,
      subQuestions:'WHEN I WAS IN PAIN I ISOLATED MYSELF FROM OTHERS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 7,
      questions: 'Pain Behavior',
      subQuestionId:7.7,
      subQuestions:'WHEN I WAS IN PAIN I THRASHED',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 8,
      questions: 'Pain Interferance',
      subQuestionId:8.1,
      subQuestions:'HOW MUCH DID PAIN INTERFERE WITH YOUR DAY TO DAY ACTIVITIES',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 8,
      questions: 'Pain Interferance',
      subQuestionId:8.2,
      subQuestions:'HOW MUCH DID PAIN INTERFERE WITH WORK AROUND THE HOME',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 8,
      questions: 'Pain Interferance',
      subQuestionId:8.3,
      subQuestions:'HOW MUCH DID PAIN INTERFERE WITH YOUR ABILITY TO PARTICIPATE IN SOCIAL ACTIVITIES',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 8,
      questions: 'Pain Interferance',
      subQuestionId:8.4,
      subQuestions:'HOW MUCH DID PAIN INTERFERE WITH YOUR HOUSEHOLD CHORES',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 9,
      questions: 'Sleep Distrubance',
      subQuestionId:9.1,
      subQuestions:'MY SLEEP QUALITY WAS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 9,
      questions: 'Sleep Distrubance',
      subQuestionId:9.2,
      subQuestions:'MY SLEEP WAS REFRESHING',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 9,
      questions: 'Sleep Distrubance',
      subQuestionId:9.3,
      subQuestions:'I HAD A PROBLEM WITH MY SLEEP',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 9,
      questions: 'Sleep Distrubance',
      subQuestionId:9.4,
      subQuestions:'I HAD DIFFICULTY FALLING A SLEEP',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 10,
      questions: 'Promis Global Mental Health',
      subQuestionId:10.1,
      subQuestions:'IN GENERAL, HOW WOULD YOU RATE YOUR MENTAL HEALTH, INCLUDING YOUR MOOD AND YOUR ABILITY TO THINK',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 10,
      questions: 'Promis Global Mental Health',
      subQuestionId:10.2,
      subQuestions:'IN GENERAL, HOW WOULD YOU RATE YOUR SATISFACTION WITH YOUR SOCIAL ACTIVITIES AND RELATIONSHIPS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 11,
      questions: 'Global Physical Health',
      subQuestionId:11.1,
      subQuestions:'IN GENERAL, HOW WOULD YOU RATE YOUR PHYSICAL HEALTH',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 11,
      questions: 'Global Physical Health',
      subQuestionId:11.2,
      subQuestions:'TO WHAT EXTENT ARE YOU ABLE TO CARRY OUT YOUR EVERYDAY PHYSICAL ACTIVITIES SUCH AS WALKING, CLIMBING STAIRS, CARRYING GROCERIES, OR MOVING A CHAIR',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 12,
      questions: 'HEAL POSITIVE OUTLOOK',
      subQuestionId:12,
      subQuestions:'HEAL POSITIVE OUTLOOK',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 13,
      questions: 'PAIN DETECT',
      subQuestionId:13,
      subQuestions:'PAIN DETECT',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 14,
      questions: 'OPIOID CHECKLIST',
      subQuestionId:14,
      subQuestions:'OPIOID CHECKLIST',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 15,
      questions: 'IMPRESSION OF CHANGE',
      subQuestionId:15,
      subQuestions:'IMPRESSION OF CHANGE',
      p_Options: '',
      text1: '',
      text2: ''
    },

  ]
}
