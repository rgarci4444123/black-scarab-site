import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return [
      {
        source:
          "/insights/physical-intelligence-generalist-robot-policy-guide-7",
        destination:
          "/insights/physical-intelligence-generalist-robot-policy-guide",
        permanent: true,
      },
      {
        source:
          "/insights/hailo-edge-ai-acceleration-physical-ai-guide-5",
        destination:
          "/insights/hailo-edge-ai-acceleration-physical-ai-guide",
        permanent: true,
      },
      {
        source:
          "/insights/roboflow-computer-vision-platform-physical-ai-guide-3",
        destination:
          "/insights/roboflow-computer-vision-platform-physical-ai-guide",
        permanent: true,
      },
      {
        source:
          "/insights/nvidia-physical-ai-cosmos-isaac-jetson-omniverse-guide-9",
        destination:
          "/insights/nvidia-physical-ai-cosmos-isaac-jetson-omniverse-guide",
        permanent: true,
      },
      {
        source:
          "/insights/viam-robotics-software-platform-physical-ai-guide-5",
        destination:
          "/insights/viam-robotics-software-platform-physical-ai-guide",
        permanent: true,
      },
      {
        source:
          "/insights/top-10-robots-edge-ai-automation-humanoid-robotics-1",
        destination:
          "/insights/top-10-robots-edge-ai-automation-humanoid-robotics",
        permanent: true,
      },
      {
        source:
          "/insights/fort-robotics-trust-layer-physical-ai-safety-guide-7",
        destination:
          "/insights/fort-robotics-trust-layer-physical-ai-safety-guide",
        permanent: true,
      },
      {
        source:
          "/insights/gecko-robotics-asset-health-physical-ai-guide-5",
        destination:
          "/insights/gecko-robotics-asset-health-physical-ai-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
