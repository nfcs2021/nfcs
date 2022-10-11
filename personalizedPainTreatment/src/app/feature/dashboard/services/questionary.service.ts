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
      questions: 'HOW WOULD YOU RATE YOUR PAIN ON AVERAGE',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 2,
      questions: 'HOW LONG HAVE YOU HAD YOUR PAIN PROBLEM',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 3,
      questions: 'AGE IN YERAS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 4,
      questions: 'I FELT FAERFULL',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 5,
      questions: 'I FOUND IT HARD TO FOCUS ON ANYTHING OTHER THAN MY ANXIETY',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 6,
      questions: 'MY WORRIES OVERWHELMED ME',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 7,
      questions: 'I FELT UNEASY',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 8,
      questions: 'I FELT WORTHLESS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 9,
      questions: 'I FELT HELPLESS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 10,
      questions: 'I FELT DEPRESSED',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 11,
      questions: 'I FELT HOPELESS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 12,
      questions: 'ARE YOU ABLE TO DO CHORES SUCH AS VACUUMING OR WORK',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 13,
      questions: 'ARE YOU ABLE TO GO UP AND DOWN STAIRS AT A NORMAL PACE',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 14,
      questions: 'ARE YOU ABLE TO GO FOR A WALK OF AT LEAST 15 MINUTES',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 15,
      questions: 'ARE YOU ABLE TO RUN ERRANDS AND SHOP',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 16,
      questions: 'WHEN I WAS IN PAIN I BECAME IRRITABLE',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 17,
      questions: 'WHEN I WAS IN PAIN I GRIMACED',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 18,
      questions: 'WHEN I WAS IN PAIN I MOVED EXTREMELY SLOWLY',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 19,
      questions: 'WHEN I WAS IN PAIN I MOVED STIFFLY',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 20,
      questions: 'WHEN I WAS IN PAIN I CALLED OUT FOR SOMEONE TO HELP ME',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 21,
      questions: 'WHEN I WAS IN PAIN I ISOLATED MYSELF FROM OTHERS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 22,
      questions: 'WHEN I WAS IN PAIN I THRASHED',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 23,
      questions: 'HOW MUCH DID PAIN INTERFERE WITH YOUR DAY TO DAY ACTIVITIES',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 24,
      questions: 'HOW MUCH DID PAIN INTERFERE WITH WORK AROUND THE HOME',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 25,
      questions: 'HOW MUCH DID PAIN INTERFERE WITH YOUR ABILITY TO PARTICIPATE IN SOCIAL ACTIVITIES',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 26,
      questions: 'HOW MUCH DID PAIN INTERFERE WITH YOUR HOUSEHOLD CHORES',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 27,
      questions: 'MY SLEEP QUALITY WAS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 28,
      questions: 'MY SLEEP WAS REFRESHING',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 29,
      questions: 'I HAD A PROBLEM WITH MY SLEEP',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 30,
      questions: 'I HAD DIFFICULTY FALLING A SLEEP',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 31,
      questions: 'IN GENERAL, HOW WOULD YOU RATE YOUR MENTAL HEALTH, INCLUDING YOUR MOOD AND YOUR ABILITY TO THINK',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 32,
      questions: 'IN GENERAL, HOW WOULD YOU RATE YOUR SATISFACTION WITH YOUR SOCIAL ACTIVITIES AND RELATIONSHIPS',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 33,
      questions: 'IN GENERAL, HOW WOULD YOU RATE YOUR PHYSICAL HEALTH',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 34,
      questions: 'TO WHAT EXTENT ARE YOU ABLE TO CARRY OUT YOUR EVERYDAY PHYSICAL ACTIVITIES SUCH AS WALKING, CLIMBING STAIRS, CARRYING GROCERIES, OR MOVING A CHAIR',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 35,
      questions: 'HEAL POSITIVE OUTLOOK',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 36,
      questions: 'PAIN DETECT',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 37,
      questions: 'OPIOID CHECKLIST',
      p_Options: '',
      text1: '',
      text2: ''
    },
    {
      patientData_Id: NaN,
      question_Id: 38,
      questions: 'IMPRESSION OF CHANGE',
      p_Options: '',
      text1: '',
      text2: ''
    },

  ]
}
