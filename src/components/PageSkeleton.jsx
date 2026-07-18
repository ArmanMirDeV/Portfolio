import { motion } from 'framer-motion';

const shimmer = "animate-pulse bg-gradient-to-r from-white/[0.03] via-white/[0.08] to-white/[0.03] bg-[length:200%_100%] animate-shimmer-slow";

const PageSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background-dark"
    >
      <div className="lg:ml-64 relative">
        {/* Background blobs */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/8 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/8 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        </div>

        {/* Hero skeleton */}
        <div className="min-h-screen flex items-center px-6 lg:px-12">
          <div className="max-w-2xl space-y-6">
            <div className={`h-3 w-24 rounded-full ${shimmer}`} />
            <div className={`h-14 w-3/4 rounded-lg ${shimmer}`} />
            <div className={`h-14 w-1/2 rounded-lg ${shimmer}`} />
            <div className="space-y-2 pt-4">
              <div className={`h-4 w-full rounded ${shimmer}`} />
              <div className={`h-4 w-4/5 rounded ${shimmer}`} />
            </div>
            <div className="flex gap-4 pt-4">
              <div className={`h-12 w-40 rounded-xl ${shimmer}`} />
              <div className={`h-12 w-12 rounded-xl ${shimmer}`} />
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className={`w-72 h-72 rounded-3xl ${shimmer}`} />
          </div>
        </div>

        {/* About skeleton */}
        <div className="px-6 lg:px-12 py-20 max-w-5xl mx-auto space-y-6">
          <div className={`h-8 w-32 rounded ${shimmer}`} />
          <div className={`h-10 w-64 rounded-lg ${shimmer}`} />
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <div className={`h-4 w-full rounded ${shimmer}`} />
              <div className={`h-4 w-full rounded ${shimmer}`} />
              <div className={`h-4 w-3/4 rounded ${shimmer}`} />
            </div>
            <div className={`h-48 rounded-2xl ${shimmer}`} />
          </div>
        </div>

        {/* Footer skeleton */}
        <div className="py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className={`h-5 w-32 rounded ${shimmer}`} />
                <div className={`h-3 w-48 rounded ${shimmer}`} />
              </div>
              <div className="flex justify-center gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-4 w-14 rounded ${shimmer}`} />
                ))}
              </div>
              <div className="flex justify-end gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-9 w-9 rounded-lg ${shimmer}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageSkeleton;
