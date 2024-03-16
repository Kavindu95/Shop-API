import {Joi,celebrate,Segments} from 'celebrate'

export const validateUserCreateParam = celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required(),
    }),
  })