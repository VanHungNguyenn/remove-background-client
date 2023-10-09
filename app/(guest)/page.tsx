import Explore from '@/app/(guest)/_components/Explore'
import Features from '@/app/(guest)/_components/Features'
import Guide from '@/app/(guest)/_components/Guide'
import Hero from '@/app/(guest)/_components/Hero'
import Question from '@/app/(guest)/_components/Question'
import Review from '@/app/(guest)/_components/Review'

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
