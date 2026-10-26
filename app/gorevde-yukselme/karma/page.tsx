import { createPageMetadata } from '../../../lib/seo';
import { getTestData } from '../../../lib/test-data';
import { getGorevdeSubjects } from '../data';
import KarmaClient from './KarmaClient';

export const metadata = createPageMetadata({
  title: 'Görevde Yükselme Karma Denemesi',
  description: 'Yayımlanan görevde yükselme testlerinden size özel karma deneme oluşturun.',
  path: '/gorevde-yukselme/karma',
  index: false,
});

export default async function KarmaPage() {
  const subjects = await getGorevdeSubjects();
  const tests = await Promise.all(subjects.flatMap((subject) => subject.tests).map((test) => getTestData(test.id)));
  const questions = tests.flatMap((test) => test ? test.questions.map((question) => ({ ...question, id: `${test.id}:${question.id}` })) : []);
  return <KarmaClient questions={questions} />;
}
