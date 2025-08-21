import { Badge } from "@/components/ui/badge";

// Import influencer images - temporarily using placeholders
const andrewNgImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const alexKarpImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const jeffDeanImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const samAltmanImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const aravindSrinivasImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const geoffreyHintonImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const yoshuaBengioImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const yannLeCunImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const demisHassabisImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const feiFeiLiImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const hilaryMasonImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const djPatilImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";
const cathyOneilImg = "/lovable-uploads/c005205c-0af7-4a6b-930a-b0915e65f981.png";

const AIInfluencers = () => {
  const aiInfluencers = [
    {
      name: "Andrew Ng",
      role: "Founder of Coursera, Ex-Baidu AI Chief, Stanford Professor",
      quote: "AI is the new electricity. Just as electricity transformed industries, AI will now do the same.",
      image: andrewNgImg
    },
    {
      name: "Alex Karp",
      role: "CEO of Palantir Technologies",
      quote: "The future belongs to those who can harness data to make better decisions faster.",
      image: alexKarpImg
    },
    {
      name: "Jeff Dean",
      role: "Senior Fellow at Google, Head of Google AI",
      quote: "Machine learning is not just about algorithms, it's about changing how we think about problems.",
      image: jeffDeanImg
    },
    {
      name: "Sam Altman",
      role: "CEO of OpenAI",
      quote: "The development of AI will be the most important technological development in human history.",
      image: samAltmanImg
    },
    {
      name: "Aravind Srinivas",
      role: "CEO of Perplexity AI",
      quote: "The future of search is conversational, powered by AI that truly understands context.",
      image: aravindSrinivasImg
    },
    {
      name: "Geoffrey Hinton",
      role: "Godfather of Deep Learning, Turing Award Winner",
      quote: "I think it's very important that we develop AI in a way that's beneficial for humanity.",
      image: geoffreyHintonImg
    },
    {
      name: "Yoshua Bengio",
      role: "Professor at University of Montreal, Turing Award Winner",
      quote: "We need to make sure AI systems are aligned with human values and beneficial for society.",
      image: yoshuaBengioImg
    },
    {
      name: "Yann LeCun",
      role: "Chief AI Scientist at Meta, Turing Award Winner",
      quote: "Intelligence is the ability to predict. Everything else is just a consequence of that.",
      image: yannLeCunImg
    },
    {
      name: "Demis Hassabis",
      role: "CEO of Google DeepMind",
      quote: "AI has the potential to solve some of humanity's most pressing challenges.",
      image: demisHassabisImg
    },
    {
      name: "Fei-Fei Li",
      role: "Professor at Stanford, Co-Founder of AI4ALL",
      quote: "AI is not just about making machines smarter, it's about making humans more capable.",
      image: feiFeiLiImg
    },
    {
      name: "Hilary Mason",
      role: "Founder of Hidden Door, Former Chief Scientist at Bitly",
      quote: "Data science is about turning data into products and insights that create value.",
      image: hilaryMasonImg
    },
    {
      name: "DJ Patil",
      role: "Former US Chief Data Scientist",
      quote: "Data science is about extracting knowledge and insights from data to solve real problems.",
      image: djPatilImg
    },
    {
      name: "Cathy O'Neil",
      role: "Author of 'Weapons of Math Destruction', Data Scientist",
      quote: "Algorithms are opinions embedded in code, and we must ensure they serve humanity fairly.",
      image: cathyOneilImg
    }
  ];

  return (
    <section id="ai-influencers" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Industry Leaders
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI & Data Science Visionaries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights and wisdom from the pioneers shaping the future of artificial intelligence and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiInfluencers.map((person, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-lg text-foreground">{person.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{person.role}</p>
                </div>
                <blockquote className="text-sm italic text-muted-foreground leading-relaxed">
                  "{person.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIInfluencers;