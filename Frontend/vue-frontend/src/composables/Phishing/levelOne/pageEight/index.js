export const QuizQuestion = [
  {
    type: "email",
    sender: "rewards@amazn-survey.com",
    subject:
      "Congratulations! You have Been Selected for a $500 Amazon Gift Card",
    date: "Yesterday, 3:45 PM",
    content: `
      <div>
        <img src="https://picsum.photos/id/20/600/100" alt="Amazon" class="mb-3 w-full" />
        <p class="my-5">Congratulations!</p>
        <p class="my-4">You have been randomly selected to participate in our quick customer satisfaction survey.</p>
        <p class="my-4"><span class="font-bold text-green-600">Complete our 30-second survey and receive a $500 Amazon gift card absolutely FREE!</span> No purchase necessary.</p>
        <p class="my-4">We only have <span class="font-bold">10 gift cards remaining</span>, so act fast!</p>
        <p class="my-4"><a href="#" class="bg-yellow-400 text-black px-4 py-2 rounded">Take Survey Now</a></p>
        <p class="mt-4">Amazon Customer Rewards Team</p>
      </div>
    `,
    options: [
      "Sense of Urgency",
      "Authority Impersonation",
      "Too Good To Be True Rewards",
      "Fear Tactics",
      "Curiosity Bait",
    ],
    correctAnswer: ["Too Good To Be True Rewards", "Sense of Urgency"],
  },
  {
    type: "email",
    sender: "helpdesk@company-it-support.com",
    subject: "Action Required: System Password Update",
    date: "Monday, 9:12 AM",
    content: `
      <div>
        <img src="https://picsum.photos/id/180/600/100" alt="IT Department" class="mb-3 w-full" />
        <p>Dear Employee,</p>
        <p class="my-2">The IT department is performing scheduled maintenance on our security systems.</p>
        <p class="my-2">As part of this process, we need to verify your current password and update your security settings.</p>
        <p class="my-2"><span class="font-bold">Please reply to this email with your current password</span> so we can perform the necessary updates to your account.</p>
        <p class="my-2">This is a required security procedure for all employees.</p>
        <p class="mt-4">Thank you for your cooperation,</p>
        <p>John Smith<br>IT Security Department</p>
      </div>
    `,
    options: [
      "Sense of Urgency",
      "Authority Impersonation",
      "Too Good To Be True Rewards",
      "Fear Tactics",
      "Curiosity Bait",
    ],
    correctAnswer: "Authority Impersonation",
  },

  {
    type: 'sms',
    sender: '5551234567',
    date: '2:15 PM',
    content: 'ALERT: We detected suspicious activity on your bank account. Your access has been limited. Verify your identity now to restore access: http://bank-verify.co/user',
    options: ["Sense of Urgency", "Authority Impersonation", "Too Good To Be True Rewards", "Fear Tactics", "Curiosity Bait"],
    correctAnswer: "Fear Tactics"
  },
  {
    type: 'sms',
    sender: '5551234567',
    date: '2:15 PM',
    content: 'ALERT: We detected suspicious activity on your bank account. Your access has been limited. Verify your identity now to restore access: http://bank-verify.co/user',
    options: ["Sense of Urgency", "Authority Impersonation", "Too Good To Be True Rewards", "Fear Tactics", "Curiosity Bait"],
    correctAnswer: "Fear Tactics"
  },
  {
    type: 'sms',
    sender: '5551234567',
    date: '2:15 PM',
    content: 'ALERT: We detected suspicious activity on your bank account. Your access has been limited. Verify your identity now to restore access: http://bank-verify.co/user',
    options: ["Sense of Urgency", "Authority Impersonation", "Too Good To Be True Rewards", "Fear Tactics", "Curiosity Bait"],
    correctAnswer: "Fear Tactics"
  },
];
