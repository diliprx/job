import { useState, useRef, useEffect } from "react";
import {
  Linkedin,
  Instagram,
  Clock,
  MessageCircle,
  Menu,
  X,
  Trophy,
  Mail,
  Phone,
  Sun,
  Moon,
  Flag,
} from "lucide-react";

const CTFTeamWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const containerRef = useRef(null);
  const [drops, setDrops] = useState([]);

  // Initialize binary rain drops
  useEffect(() => {
    const numDrops = 40;
    const initialDrops = Array.from({ length: numDrops }, (_, i) => ({
      id: i,
      x: i * (window.innerWidth / numDrops),
      y: Math.random() * -500,
      speed: 2 + Math.random() * 3,
      chars: Array.from({ length: 20 }, () =>
        Math.random() > 0.5 ? "1" : "0"
      ),
    }));
    setDrops(initialDrops);
  }, []);

  // Animate binary rain
  useEffect(() => {
    const interval = setInterval(() => {
      setDrops((prevDrops) =>
        prevDrops.map((drop) => {
          const newY = drop.y + drop.speed;
          return {
            ...drop,
            y: newY > window.innerHeight ? -100 : newY,
            chars: drop.chars.map(() => (Math.random() > 0.5 ? "1" : "0")),
          };
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const teamMembers = [
    {
      name: "Akash VI",
      handle: "MIK3Y",
      linkedin: "https://www.linkedin.com/in/akash-v-i/",
      ctftime: "https://tryhackme.com/p/M1K3Y",
    },
    {
      name: "Dilip Kumar V",
      handle: "Cle_Obsecure",
      linkedin: "https://www.linkedin.com/in/diliprx/",
      ctftime: "https://tryhackme.com/p/CleObsecure",
    },
    {
      name: "Gopinath S",
      handle: "A$TR0",
      linkedin: "https://www.linkedin.com/in/gopinath-s-42256b293/",
      ctftime: "https://ctftime.org/user/astro",
    },
    {
      name: "Hari Priyan R",
      handle: "Hpr31",
      linkedin: "https://www.linkedin.com/in/haripriyan-r-29b25a323/",
      ctftime: "https://tryhackme.com/p/Hpr31",
    },
    {
      name: "Hemanth Kumar B",
      handle: "N1ght_M4r3_d4rk",
      linkedin: "https://www.linkedin.com/in/hemanthkumarb485/",
      ctftime: "https://tryhackme.com/p/N1ghtM4r3485",
    },
    {
      name: "Kirthi Sai T",
      handle: "felix_jack",
      linkedin: "https://www.linkedin.com/in/kirthi-sai/",
      ctftime: "https://tryhackme.com/p/felixjack",
    },
    {
      name: "Muthumeena",
      handle: "P34rlf15h",
      linkedin: "https://www.linkedin.com/in/muthumeena-m-5091b3290/",
      ctftime: "https://tryhackme.com/p/Muthumeena",
    },
    {
      name: "Lakshmi S",
      handle: "Ash3nX",
      linkedin: "https://www.linkedin.com/in/lakshmi-suresh383/",
      ctftime: "https://tryhackme.com/p/Auronix",
    },
    {
      name: "Porselvi",
      handle: "Crypt0Cr3w",
      linkedin: "https://www.linkedin.com/in/porselvi-p-130a282a0/",
      ctftime: "https://tryhackme.com/p/Crypt0Cr3w",
    },
    {
      name: "Sachin Madhumitha Sree D",
      handle: "Sen0i",
      linkedin: "https://www.linkedin.com/in/sachin-madhumitha-sree-d-/",
      ctftime: "https://tryhackme.com/p/Sen0i",
    },
  ];

  const achievements = [
    {
      year: "2024",
      event: "SRM Engineering College, Chengalpattu",
      title: "H7TEX CTF",
      place: "3rd Place (Intern National Level)",
      description:
        "Secured 3rd place in an exciting and challenging cybersecurity competition, tackling problems in web exploitation, cryptography, forensics, and reverse engineering.",
      details: ["Won a cash prize for the achievement"],
    },
    {
      year: "2025",
      event: "Sairam Enginnering College, Chennai",
      title: "AIRO 5.0 2025",
      place: "1st Position (National Level)",
      description:
        "Secured 1st Place out of hundreds of national teams, demonstrating precision, speed, and unmatched teamwork under pressure.",
      details: [
        "Overcame complex challenges in web exploitation, cryptography, forensics, and reverse engineering",
      ],
    },
    {
      year: "2025",
      event: "Sairam Enginnering College, Chennai",
      title: "CODECRAFT-25",
      place: "2nd Place (National Level)",
      description:
        "Secured 2nd Place out of hundreds of national teams, demonstrating precision, speed, and unmatched teamwork under pressure.",
      details: [
        "Won a cash prize for the achievement(6000 INR)",
        "National level Hackathon with over 100 teams",
      ],
    },
    {
      year: "2025",
      event: "Jerusalem College of Engineering - India",
      title: "Escape Room 2.0 CTF",
      place: "1st Postion",
      description:
        "C1CC4D0 secured 1st place in the Escape Room 2.0 CTF, excelling in both the Key and Flag challenge stages. The event tested our problem-solving, teamwork, and cybersecurity skills under high-pressure conditions.",
      details: [
        "Successfully completed the Key Challenge by uncovering clues, extracting hidden keys, and navigating multi-room puzzle structures.",
        "Captured all final flags using the extracted keys, demonstrating strong coordination, logic, and technical proficiency.",
      ],
    },
    {
      year: "2025",
      event:
        "Sri Sai Ram Institute of Technology (Sairam Group of Institutions)",
      title: "COCONEZ 2K25 – Capture The Flag",
      place: "1st Place",
      description:
        "C1CC4D0 secured 1st place at COCONEZ 2K25, dominating challenges across Web, OSINT, Reverse Engineering, Forensics, Misc, and Cryptography. The event tested real-time problem-solving, team coordination, and technical depth under competitive pressure.",
      details: [
        "Solved multi-domain cybersecurity challenges that required rapid analysis, precision, and teamwork to capture flags before competing teams.",
      ],
    },
    {
      year: "2025",
      event:
        "New Prince Shri Bhavani College of Engineering and Technology, Chennai",
      title: "INNOHACK – Ayathon Hackathon",
      place: "3rd Place",
      description:
        "Secured 3rd place at INNOHACK – Ayathon Hackathon held on March 19–20, 2025. The team demonstrated strong innovation, strategic thinking, and problem-solving skills while developing impactful solutions under time-bound conditions.",
      details: [
        "Presented a creative and technically sound solution that impressed evaluators, reflecting the team’s dedication, planning, and execution throughout the event.",
      ],
    },
    {
      year: "2025",
      event: "Easwari Engineering College (SRM Group of Institutions)",
      title: "AnzenCTF 3.0",
      place: "2nd Place",
      description:
        "C1CC4D0 secured 2nd place at AnzenCTF 3.0 on October 14th, demonstrating strong technical skill and consistent performance across multiple CTF domains. The event featured an intense set of challenges that tested precision, problem-solving, and collaborative strategy.",
      details: [
        "Competed across OSINT, Cryptography, Web Exploitation, Reverse Engineering, Forensics, and Steganography — showcasing versatility and cross-domain expertise under competitive pressure.",
        "Achieved an overall score of 3475 points, reflecting strong execution, effective coordination, and the ability to solve complex problems within limited time.",
      ],
    },
  ];

  const themeClasses =
    theme === "dark" ? "bg-black text-white" : "bg-gray-50 text-gray-900";

  const borderColor = theme === "dark" ? "border-gray-800" : "border-gray-300";
  const hoverColor =
    theme === "dark" ? "hover:border-red-400" : "hover:border-red-600";
  const cardBg =
    theme === "dark" ? "bg-black bg-opacity-50" : "bg-white bg-opacity-80";

  return (
    <div
      className={`min-h-screen ${themeClasses} font-mono relative overflow-hidden transition-colors duration-300`}
      ref={containerRef}
    >
      {/* Binary Rain Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none overflow-hidden">
        {drops.map((drop) => (
          <div
            key={drop.id}
            className="absolute font-mono text-red-500"
            style={{
              left: `${drop.x}px`,
              top: `${drop.y}px`,
              fontSize: "14px",
              lineHeight: "20px",
              textShadow: "0 0 5px rgba(239, 68, 68, 0.5)",
            }}
          >
            {drop.chars.map((char, i) => (
              <div
                key={i}
                style={{
                  opacity: Math.max(0, 1 - i * 0.05),
                }}
              >
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Theme Toggle Button - Bottom Right */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full ${cardBg} border-none ${hoverColor} transition-all hover:scale-110 shadow-lg`}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun size={24} className="text-white" />
        ) : (
          <Moon size={24} className="text-black-600" />
        )}
      </button>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full ${
          theme === "dark" ? "bg-black" : "bg-white"
        } bg-opacity-90 backdrop-blur-sm z-50 border-b ${borderColor}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            {" "}
            <h1 className="text-center">C1CC4D0</h1>
          </div>

          {/* laptop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              "Home",
              "Team",
              "Succeeds",
              "Profiles",
              "Our Sponsors",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-red-400 transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-red-400 border-b-2 border-black-400"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* phone Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/*  Menu phone*/}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${
              theme === "dark" ? "bg-black" : "bg-white"
            } border-t ${borderColor}`}
          >
            {[
              "Home",
              "Team",
              "Succeeds",
              "Profiles",
              "Our Sponsors",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-6 py-3 ${
                  theme === "dark" ? "hover:bg-gray-900" : "hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="text-center z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
            C1CC4D0
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-red-400">
            / Recon | Break | Capture
          </p>
          <p
            className={`max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } mb-8 leading-relaxed`}
          >
            From national arenas to global CTF battlegrounds, we push ourselves
            to break limits and think differently. Each challenge teaches us
            something new, helping us grow, innovate, and sharpen our technical
            and analytical skills as a team.
          </p>
          <button
            onClick={() => scrollToSection("profiles")}
            className={`${
              theme === "dark"
                ? "bg-white text-black hover:bg-red-600 hover:text-black"
                : "bg-black text-white hover:bg-red-600"
            } px-8 py-3 font-bold transition-all transform hover:scale-105`}
          >
            JOIN OUR NEXT EVENT
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`border ${borderColor} p-6 rounded-2xl ${hoverColor} transition-all transform hover:scale-105 ${cardBg}`}
              >
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  } mb-4`}
                >
                  {member.handle}
                </p>
                <div
                  className={`flex space-x-3 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={20}
                      className="hover:text-blue-300 cursor-pointer"
                    />
                  </a>

                  {/* CTFtime */}
                  <a
                    href={member.ctftime}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flag
                      size={20}
                      className="hover:text-green-600 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="succeeds" className="min-h-screen py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Achievements & Milestones
          </h2>
          <p
            className={`text-center ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            } mb-16 max-w-3xl mx-auto`}
          >
            From local hackathons to international arenas, our teams have
            consistently ranked among the best—proving our commitment to
            excellence, innovation, and cybersecurity mastery.
          </p>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex">
                <div className="flex flex-col items-center mr-8">
                  <Trophy className="text-gold-400 mb-4" size={32} />
                  <div
                    className={`w-0.5 h-full ${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></div>
                </div>
                <div
                  className={`flex-1 border ${borderColor} p-8 rounded-2xl ${hoverColor} transition-all transform hover:scale-102  ${cardBg}`}
                >
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-500" : "text-gray-600"
                    } mb-2`}
                  >
                    {achievement.year} • {achievement.event}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center mb-4">
                    <Trophy className="text-orange-400 mr-2" size={20} />
                    <span className="text-lg font-semibold">
                      {achievement.place}
                    </span>
                  </div>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    } mb-4`}
                  >
                    {achievement.description}
                  </p>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, i) => (
                      <li
                        key={i}
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        } flex items-start`}
                      >
                        <span className="text-red-400 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section
        id="profiles"
        className="min-h-screen py-20 px-6 relative flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Find Us Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://www.linkedin.com/company/c1cc4d0"
              target="_blank"
              className={`border ${borderColor} p-12 rounded-2xl ${hoverColor} transition-all transform hover:scale-105 ${cardBg} group`}
            >
              <Linkedin
                size={64}
                className="mx-auto mb-4 group-hover:text-blue-400"
              />
              <h3 className="text-xl font-bold">LinkedIn</h3>
            </a>
            <a
              href="https://www.instagram.com/c1cc4d0"
              target="_blank"
              className={`border ${borderColor} p-12 rounded-b-full ${hoverColor} transition-all transform hover:scale-105 ${cardBg} group`}
            >
              <Instagram
                size={64}
                className="mx-auto mb-4 group-hover:text-purple-400"
              />
              <h3 className="text-xl font-bold">Instagram</h3>
            </a>
            <a
              href="https://discord.gg/cTfEej88"
              target="_blank"
              className={`border ${borderColor} p-12 rounded-t-full ${hoverColor} transition-all transform hover:scale-105 ${cardBg} group`}
            >
              <MessageCircle
                size={64}
                className="mx-auto mb-4 group-hover:text-blue-700"
              />
              <h3 className="text-xl font-bold">Discord</h3>
            </a>
            <a
              href="https://ctftime.org/team/373308 "
              target="_blank"
              className={`border ${borderColor} p-12 rounded-2xl ${hoverColor} transition-all transform hover:scale-105 ${cardBg} group`}
            >
              <Clock
                size={64}
                className="mx-auto mb-4 group-hover:text-red-500"
              />
              <h3 className="text-xl font-bold">CTFTime</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section
        id="our sponsors"
        className="min-h-screen py-20 px-6 relative flex items-center justify-center"
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Sponsors</h2>

          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll">
              <div className="flex space-x-12 mx-8 shrink-0">
                {[
                  "H4CK_077",
                  "ALTERED SECURITY",
                  "RED TEAM",
                  "RMKCET",
                  "CYBER1",
                ].map((n) => (
                  <div
                    key={n}
                    className={`inline-flex items-center justify-center border ${borderColor} px-8 py-4 ${cardBg} min-w-[200px]`}
                  >
                    <span className="text-xl font-bold">{n}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-12 mx-8 shrink-0">
                {[
                  "H4CK_077",
                  "ALTERED SECURITY",
                  "RED TEAM",
                  "RMKCET",
                  "CYBER1",
                ].map((n) => (
                  <div
                    key={n + "_copy"}
                    className={`inline-flex items-center justify-center border ${borderColor} px-8 py-4 ${cardBg} min-w-[200px]`}
                  >
                    <span className="text-xl font-bold">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen py-20 px-6 relative flex items-center justify-center"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Get In Touch</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">Join Our Team</h3>
            <p className="text-gray-400 mb-8">
              Ready to roll with C1CC4D0? Hit the application form and shoot
              your shot — your place on the squad might be waiting.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${
                theme === "dark"
                  ? "bg-white text-black hover:bg-red-600 hover:text-black"
                  : "bg-black text-white hover:bg-red-600"
              } px-8 py-3 font-bold transition-all transform hover:scale-105`}
            >
              <a
                href="https://forms.gle/KLRzutn8MWFdAZ9v8"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Apply Now
              </a>
            </button>
          </div>

          <div className="border-t border-gray-700 pt-16">
            <h3 className="text-2xl font-bold mb-8">General Inquiries</h3>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-center">
                <Mail className="mr-4 text-red-600" />
                <div>
                  <span className="text-gray-400">Email:</span>
                  <span className="ml-4">c1cc4d0@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 text-red-600" />
                <div>
                  <span className="text-gray-400">Phone:</span>
                  <span className="ml-4">+91 73588 51959</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} C1CC4D0
      </footer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CTFTeamWebsite;
