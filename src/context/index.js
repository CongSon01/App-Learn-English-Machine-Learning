import React from 'react';

export default React.createContext({
  currentLessonData: {
    cateLesson: 'cam17',
    author: 'Công Sơn',
    image: 'cam17',
    length: 312,
    title: 'Cam 17',
    content: 'abc',
    data: {id: 1}

  },
  isLoading: true,
  showLessonBar: true,
  user_id: 1,
  full_name: 'Duong Cong Son',
  username: 'duongcongson01@gmail.com',
  verified: false,
  topicSpeakingCurrent: []
});
