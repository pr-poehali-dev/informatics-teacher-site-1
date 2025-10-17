import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'materials', label: 'Материалы', icon: 'BookOpen' },
    { id: 'courses', label: 'Курсы', icon: 'GraduationCap' },
    { id: 'projects', label: 'Проекты', icon: 'Lightbulb' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'contact', label: 'Контакты', icon: 'Mail' },
  ];

  const materials = [
    { title: 'Python для начинающих', type: 'Видеокурс', lessons: 12, color: 'bg-primary' },
    { title: 'Алгоритмы и структуры данных', type: 'Презентация', lessons: 8, color: 'bg-secondary' },
    { title: 'Web-разработка: HTML/CSS', type: 'Практика', lessons: 15, color: 'bg-accent' },
    { title: 'Основы JavaScript', type: 'Видеокурс', lessons: 20, color: 'bg-primary' },
  ];

  const courses = [
    { title: 'Основы программирования', level: 'Начальный', duration: '3 месяца', students: 24 },
    { title: 'Python Advanced', level: 'Продвинутый', duration: '4 месяца', students: 15 },
    { title: 'Веб-разработка', level: 'Средний', duration: '6 месяцев', students: 18 },
  ];

  const projects = [
    { name: 'Игра "Змейка"', author: 'Анна К.', tech: 'Python', rating: 5 },
    { name: 'Портфолио сайт', author: 'Максим Р.', tech: 'React', rating: 5 },
    { name: 'Телеграм-бот', author: 'София М.', tech: 'Python', rating: 4 },
    { name: 'Калькулятор', author: 'Иван Д.', tech: 'JavaScript', rating: 4 },
  ];

  const events = [
    { date: new Date(2025, 9, 18), title: 'Урок Python', time: '14:00' },
    { date: new Date(2025, 9, 20), title: 'Сдача проекта', time: '16:00' },
    { date: new Date(2025, 9, 22), title: 'Контрольная работа', time: '13:00' },
    { date: new Date(2025, 9, 24), title: 'Урок Python', time: '12:00' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const getEventsForDate = (date: Date | undefined) => {
    if (!date) return [];
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const selectedDateEvents = getEventsForDate(selectedDate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50 to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Code2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Информатика
                </h1>
                <p className="text-xs text-muted-foreground">с Еленой Ивановной</p>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => scrollToSection(item.id)}
                  className="gap-2 transition-all hover:scale-105"
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden lg:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Добро пожаловать на курс информатики!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Изучаем программирование, алгоритмы и создаем крутые проекты вместе
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2 animate-scale-in" onClick={() => scrollToSection('materials')}>
                <Icon name="BookOpen" size={20} />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="gap-2 animate-scale-in" onClick={() => scrollToSection('schedule')}>
                <Icon name="Calendar" size={20} />
                Расписание
              </Button>
            </div>
          </div>
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl animate-slide-up">
            <img
              src="https://cdn.poehali.dev/projects/2af78558-5001-464d-9fcd-8789406e57c5/files/185224a6-b406-4fa9-8c0f-b1eadf4e2891.jpg"
              alt="Обучение"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="font-heading text-4xl font-bold mb-12 text-center">Учебные материалы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer animate-fade-in border-2 hover:border-primary">
                <CardHeader>
                  <div className={`w-12 h-12 ${material.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon name="BookOpen" className="text-white" size={24} />
                  </div>
                  <CardTitle className="font-heading">{material.title}</CardTitle>
                  <CardDescription>{material.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="PlayCircle" size={16} />
                    <span>{material.lessons} уроков</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="font-heading text-4xl font-bold mb-12 text-center">Мои курсы</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all animate-fade-in">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Icon name="GraduationCap" className="text-white" size={28} />
                    </div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="font-heading text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Users" size={16} className="text-muted-foreground" />
                    <span>{course.students} учеников</span>
                  </div>
                  <Button className="w-full mt-4 gap-2">
                    <Icon name="ArrowRight" size={16} />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="font-heading text-4xl font-bold mb-12 text-center">Проекты учеников</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                      <Icon name="Lightbulb" className="text-white" size={20} />
                    </div>
                    <Badge>{project.tech}</Badge>
                  </div>
                  <CardTitle className="font-heading text-lg">{project.name}</CardTitle>
                  <CardDescription>Автор: {project.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < project.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h3 className="font-heading text-4xl font-bold mb-12 text-center">Расписание и дедлайны</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Calendar" size={24} />
                  Календарь занятий
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Bell" size={24} />
                  {selectedDate ? `Занятия ${selectedDate.getDate()} ${selectedDate.toLocaleDateString('ru', { month: 'long' })}` : 'Выберите дату'}
                </CardTitle>
                <CardDescription>
                  {selectedDateEvents.length > 0 
                    ? `Найдено занятий: ${selectedDateEvents.length}`
                    : 'Нет занятий на эту дату'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedDateEvents.length > 0 ? (
                  selectedDateEvents.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 hover:border-primary/40 transition-all animate-scale-in">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex flex-col items-center justify-center text-white shadow-lg">
                        <Icon name="BookOpen" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{event.title}</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Icon name="Clock" size={14} />
                          {event.time}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Icon name="CalendarX" size={48} className="mx-auto mb-3 opacity-50" />
                    <p>На выбранную дату занятий не запланировано</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-2xl">
          <h3 className="font-heading text-4xl font-bold mb-4 text-center">Свяжитесь со мной</h3>
          <p className="text-center text-muted-foreground mb-12">
            Есть вопросы? Напишите мне, и я обязательно отвечу!
          </p>
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Ваш вопрос или предложение..." rows={5} />
                </div>
                <Button className="w-full gap-2" size="lg">
                  <Icon name="Send" size={18} />
                  Отправить
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <span>elena.ivanova@school.edu</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  <span>Кабинет 305, школа №15</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Code2" size={32} />
            <h4 className="font-heading text-2xl font-bold">Информатика</h4>
          </div>
          <p className="text-white/80 mb-6">Учим программировать с любовью к технологиям</p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
          <p className="text-sm text-white/60 mt-8">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;