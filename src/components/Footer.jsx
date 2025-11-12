import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} <span className="font-semibold gradient-text">Shivam Chaudhary</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-current animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
