import Explore from '@/components/Explore'
import Features from '@/components/Features'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'
import Question from '@/components/Question'
import Review from '@/components/Review'

export default function Home() {
	return (
		<>
			<Hero />
			<Guide />
			<Features />
			<Explore />
			<Review />
			<Question />
		</>
	)
}
