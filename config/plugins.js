module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary-folderoptions',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
        default_folder: 'DJ-Events-Images'
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });