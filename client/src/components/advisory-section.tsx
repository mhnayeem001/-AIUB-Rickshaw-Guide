import { useState } from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';

export function AdvisorySection() {
  const { t, language } = useLanguage();
  const [showMessage, setShowMessage] = useState(false);
  const [clicked, setClicked] = useState(false);

  const safetyTips = [
    {
      en: 'Always negotiate the fare before starting your journey',
      bn: 'যাত্রা শুরুর আগে ভাড়া নির্ধারণ করে নিন',
    },
    {
      en: 'Keep emergency contacts easily accessible',
      bn: 'জরুরি যোগাযোগের নম্বর হাতের কাছে রাখুন',
    },
    {
      en: 'Share your location with friends/family',
      bn: 'বন্ধু/পরিবারের সাথে অবস্থান শেয়ার করুন',
    },
    {
      en: 'Prefer well-lit and busy routes, especially during night travel',
      bn: 'রাতের যাত্রায় আলোযুক্ত ও ব্যস্ত পথ বেছে নিন',
    },
    {
      en: 'During rainy or extremely hot days, consider offering a slightly higher fare',
      bn: 'বৃষ্টির দিনে কিংবা প্রখর তাপমাত্রায় সম্ভব হলে সামান্য ভাড়া বাড়িয়ে দিন',
    },
  ];

  const fullMessage = {
    en: `Dear fellow AIUBians, Assalamu Alaikum.

I would like to share a few words with you today—not out of complaint, but from a sense of responsibility.
My intention is simple yet important: To promote fairness in rickshaw fares so that no one is taken advantage of unfairly.

Lately, we’ve noticed a growing trend: Although the standard fare from our campus to Kuril Bishwa Road is 20 Taka, many of us are paying 30 Taka without hesitation.
Out of generosity or convenience, we may not realize that this repeated action is gradually turning kindness into entitlement. Rickshaw pullers are beginning to see the higher fare as a norm rather than an exception.

Let me share a real incident I personally witnessed: A student asked a rickshaw puller, “Mama, will you go to Bishwa Road for 20 Taka?” The rickshaw puller refused and demanded 30. Immediately, another student stepped in and said, “Mama, I’ll pay 30 Taka. Let’s go.”

This may seem helpful, but unintentionally, it undermines someone else's right to fair fare. By paying more without objection, you may be encouraging unfair practices—whether you realize it or not.

🔸 Of course, from a place of kindness, you can offer more than the standard fare. That’s not wrong. But do make it clear: “The actual fare is 20 Taka; I’m giving extra out of goodwill.” That helps the rickshaw puller understand it’s not a right—but your choice.

🔹 On the other hand, if a rickshaw puller demands more than the standard fare, do not insult or argue. Simply and politely say: “Mama, the fare should be 20 Taka. I can’t pay more than that.” If you walk away calmly, eventually they will understand.

🔸 And for those who come by bike—on rainy days or tough moments, why not help someone else get to campus? A small act of support can make someone’s day.

If we all remain conscious and uphold fairness together, then In Shaa Allah, we can bring about a meaningful change. Ensuring fair rickshaw fares isn’t just about money—it’s about ethics, awareness, and setting a standard for justice.

May you all stay well and safe.

— Mahadi Hasan Nayeem
ID: 22-46137-1`,
    bn: `প্রিয় এআইইউবিয়ান ভাই-বোনেরা, আসসালামু আলাইকুম।

এই সামান্য কথাগুলোর পেছনে আমার একটি গুরুত্বপুর্ণ উদ্দেশ্য রয়েছে— "রিকশা ভাড়ার ন্যায্যতা নিশ্চিত করা", যাতে কেউ অন্যায়ভাবে ক্ষতিগ্রস্ত না হয়।

সাম্প্রতিক সময়ে দেখা যাচ্ছে, ক্যাম্পাস থেকে কুড়িল বিশ্বরোড পর্যন্ত রিকশা ভাড়া ২০ টাকা হলেও আমরা নিজেরাই অনেক সময় ৩০ টাকা দিয়ে যাচ্ছি। এতে কী হচ্ছে? আমাদের এই অতিরিক্ত ভাড়ার ‘ভদ্রতা’ রিকশাচালকদের কাছে ‘অধিকার’ হয়ে দাঁড়াচ্ছে।

একদিন আমি নিজে দেখেছি— একজন শিক্ষার্থী রিকশাচালক মামাকে বললেন, “মামা, ২০ টাকায় বিশ্বরোড যাবেন?” তিনি রাজি হলেন না, বললেন, “৩০ টাকা লাগবে।” ঠিক তখনই পেছন থেকে আরেকজন বলে উঠলেন, “মামা আমি ৩০ টাকা দেব, চলেন।”

এই ধরণের আচরণ, চাইলেও, না চাইতেও, অন্য একজনের ন্যায্য চেষ্টাকে দুর্বল করে ফেলে। তিনি তখন হেরে যান, কারণ আপনি অনিচ্ছায় হলেও অন্যায়ের পক্ষ নিচ্ছেন।

🔸 আপনি চাইলে মানবিক দৃষ্টিকোণ থেকে বেশি ভাড়া দিতেই পারেন, সেটা দোষের কিছু না। তবে রিকশাচালককে সৌজন্যের সঙ্গেই মনে করিয়ে দিন—“ভাড়া আসলে ২০ টাকাই, আমি ইচ্ছায় বেশি দিচ্ছি।” এতে তিনি বুঝবেন এটা তাঁর প্রাপ্য নয়, বরং আপনার সদিচ্ছা।

🔹 অন্যদিকে, যদি কোনো রিকশাচালক অতিরিক্ত ভাড়া চায়— তাকে অপমান না করে, সুন্দরভাবে বলুন, “মামা, ভাড়া ২০ টাকার বেশি তো হয় না। আমি বেশি দিতে পারব না।” আপনি যদি না যান, তিনিও এক পর্যায়ে বুঝতে বাধ্য হবেন।

🔸 কেউ বাইকে করে এলে, বৃষ্টির দিনে বা কষ্টে থাকা কাউকে সহায়তা করতে পারেন— একদিন আপনার এই সহায়তায় কারো দিন ভালো কাটবে।

আমরা সবাই যদি নিজের অবস্থান থেকে একটু সচেতন হই, একই মনোভাব ধারণ করি, তাহলেই ইনশাআল্লাহ একসাথে অনেক কিছু বদলে ফেলতে পারব।

রিকশা ভাড়ার ন্যায্যতা নিশ্চিত করা ছোট কাজ নয়— এটা নৈতিকতা ও সচেতনতার প্রথম ধাপ।

সবাই ভালো থাকবেন, নিরাপদে থাকবেন।

— মাহাদি হাসান নাঈম
২২-৪৬১৩৭-১`,
  };

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 space-y-4">
      <div className="flex items-start space-x-3">
        <Info className="text-blue-500 mt-1" />
        <div className="space-y-2">
          <h4 className="font-semibold text-blue-900 dark:text-blue-200">
            {t('Safety & Fare Tips', 'নিরাপত্তা ও ভাড়ার টিপস')}
          </h4>
          <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
            {safetyTips.map((tip, index) => (
              <li key={index}>• {t(tip.en, tip.bn)}</li>
            ))}
          </ul>
        </div>
      </div>

      <Button
  className={`mt-4 transition-all duration-300 border-2 font-medium
    ${showMessage
      ? 'bg-green-600 text-white border-green-600 hover:bg-green-700 dark:bg-green-700 dark:text-white dark:hover:bg-green-800'
      : 'w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center space-x-2'
    }
  `}
  onClick={() => setShowMessage(!showMessage)}
  data-testid="toggle-personal-message"
>
  {showMessage
    ? t('Hide the Message', 'বার্তা লুকান')
    : t('A small message from my side (Nothing too important)', 'আমার পক্ষ থেকে একটি ছোট বার্তা (গুরুত্বপূর্ণ কিছু নয়)')}
</Button>

{showMessage && (
  <div
    className="mt-4 p-4 bg-red-100 dark:bg-red-800 rounded-lg text-sm whitespace-pre-line text-red-900 dark:text-red-200"
    data-testid="personal-message"
  >
    {language === 'en' ? fullMessage.en : fullMessage.bn}
  </div>
)}
        
    </div>
  );
}