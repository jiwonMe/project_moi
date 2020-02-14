import Question5C1 from '../components/questions'

function getQuestions() {
    return [
        {examName: '2020학년도-6월-수학-가형-고3_',
        index: '21',
        score: 4,
        statement: String.raw`함수 $f(x)=\dfrac{\ln x}{x}$와 양의 실수 $t$에 대하여 기울기가 $t$인 직선이 곡선 $y=f(x)$에 접할 때 접점의 $x$좌표를 $g(t)$라 하자. 원점에서 곡선 $y=f(x)$에 그은 접선의 기울기가 $a$일 때, 미분가능한 함수 $g(t)$에 대하여 $a\times g'(a)$의 값은?`,
        choose:[
            String.raw`$-\dfrac{\sqrt{e}}{3}$`,
            String.raw`$-\dfrac{\sqrt{e}}{4}$`,
            String.raw`$-\dfrac{\sqrt{e}}{5}$`,
            String.raw`$-\dfrac{\sqrt{e}}{6}$`,
            String.raw`$-\dfrac{\sqrt{e}}{7}$`
        ] }
    ]
}

const Index = () => (
    <div>
            {getQuestions().map(question => (
                <Question5C1 
                examName = {question.examName}
                index = {question.index}
                statement={question.statement}
                choose={question.choose}
                score={question.score}
                />
            ))}
    </div>
)

export default Index;