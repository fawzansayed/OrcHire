          <motion.div 
            className={`w-16 h-16 md:w-20 md:h-20 ${capability.iconBg} backdrop-blur-xl 
              border border-white/20 dark:border-white/10 rounded-2xl flex items-center justify-center 
              shadow-lg group-hover:shadow-xl transition-all duration-500`}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" strokeWidth={1.5} />
          </motion.div>
        </div>
        
        {/* Middle Section - Content */}
        <div className="flex-1 text-center space-y-4">
          <motion.h4 
            className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
            whileHover={{ y: -2 }}
          >
            {capability.title}
          </motion.h4>
          
          <motion.p 
            className="text-white/80 text-base md:text-lg leading-relaxed drop-shadow-sm group-hover:text-white/90 transition-colors duration-300"
            whileHover={{ y: -1 }}
          >
            {capability.description}
          </motion.p>
        </div>
        
        {/* Bottom Section - Decorative Elements */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {[...Array(3)].map((_, dotIndex) => (
            <motion.div
              key={dotIndex}
              className="w-2 h-2 bg-white/40 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: dotIndex * 0.3
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${capability.accentGradient} opacity-0 group-hover:opacity-20 
          transition-opacity duration-500 rounded-3xl`}
        initial={false}
      />
      
      {/* Premium Inner Shadow */}
      <div className="absolute inset-0 rounded-3xl shadow-inner shadow-black/20" />
    </div>
  </motion.div>
);
})}
</div>
</div>
</motion.div>